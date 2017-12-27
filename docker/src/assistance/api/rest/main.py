import logging
logging.getLogger().setLevel(logging.DEBUG)
import sys
from dateutil import parser

from flask import Flask, abort, make_response, jsonify, url_for, request, json
from assistance.model.AssistanceModel import AssistanceModel
from assistance.model.DispositivosModel import DispositivosModel
from flask_jsontools import jsonapi
from dateutil import parser
import datetime


from assistance.model import Session

from rest_utils import register_encoder



# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='/src/assistance/web')
register_encoder(app)

@app.route('/assistance/api/v1.0/usuarios/<uid>/lao', methods=['GET'])
@jsonapi
def usuarios(uid):
    start_str = request.args.get('sdate', None)
    start = parser.parse(start_str) if start_str else None

    end_str = request.args.get('edate', None)
    end = parser.parse(end_str) if end_str else datetime.date.today()

    return AssistanceModel.obtenerLAO(uid, start, end)

@app.route('/assistance/api/v1.0/usuarios/<uid>/reporte', methods=['GET'])
@jsonapi
def obtenerReporte(uid):
    inicio_str = request.args.get('sdate', None)
    inicio = parser.parse(inicio_str) if inicio_str else None

    fin_str = request.args.get('edate', None)
    fin = parser.parse(fin_str) if fin_str else datetime.datetime.now()

    reporte = AssistanceModel.generarReporte(inicio, fin, uid)
    return reporte

@app.route('/assistance/api/v1.0/dispositivos', methods=['GET'])
@app.route('/assistance/api/v1.0/dispositivos/<id>', methods=['GET'])
@jsonapi
def obtenerDispositivos(id=None):
    session = Session()
    try:
        if id:
            d = DispositivosModel.obtenerDispositivo(session, id)
            return d
        else:
            disp =  DispositivosModel.obtenerDispositivos(session)
            logging.info(json.dumps(disp))
            return disp
    finally:
        session.close()

@app.route('/assistance/api/v1.0/dispositivo/<uid>', methods=['PUT','POST'])
@jsonapi
def actualizar_dispositivo(uid):
    datos = json.loads(request.data)
    session = Session()
    try:
        DispositivosModel.actualizarDispositivo(session, uid, datos)
        session.commit()
    finally:
        session.close()

@app.route('/assistance/api/v1.0/dispositivo/', methods=['PUT','POST'])
@jsonapi
def crear_dispositivo():
    datos = json.loads(request.data)
    session = Session()
    try:
        d = DispositivosModel.crearDispositivo(session, datos)
        # session.commit()
        logging.info(d.__dict__)
        return d.id
    finally:
        session.close()

@app.after_request
def cors_after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


def main():
    app.run(host='0.0.0.0', port=5001, debug=True)

if __name__ == '__main__':
    main()
