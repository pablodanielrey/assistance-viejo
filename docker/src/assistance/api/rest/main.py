import logging
logging.getLogger().setLevel(logging.INFO)
import sys
from dateutil import parser

from flask import Flask, abort, make_response, jsonify, url_for, request, json
from assistance.model.AssistanceModel import AssistanceModel
from flask_jsontools import jsonapi
from dateutil import parser
import datetime

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
    fin = parser.parse(fin_str) if fin_str else datetime.date.today()

    return AssistanceModel.generarReporte(inicio, fin, [uid])

def main():
    app.run(host='0.0.0.0', port=5001, debug=True)

if __name__ == '__main__':
    main()
