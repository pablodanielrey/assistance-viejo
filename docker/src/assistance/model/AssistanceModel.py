import sys
import os
import psycopg2
import datetime

from . import Session

from .entities import *

class AssistanceModel:

    host = os.environ['ASSISTANCE_DB_OLD_HOST']
    user = os.environ['ASSISTANCE_DB_OLD_USER']
    passwd = os.environ['ASSISTANCE_DB_OLD_PASSWORD']
    base = os.environ['ASSISTANCE_DB_OLD_NAME']

    @classmethod
    def obtenerLAO(cls, uid, sdate, edate=datetime.date.today()):
        con = psycopg2.connect(host=cls.host, user=cls.user, password=cls.passwd, database=cls.base)
        try:
            cur = con.cursor()
            try:
                cur.execute("""
                    SELECT user_id, sdate, notes
                    FROM assistance.worked_notes
                    WHERE notes ILIKE  'lao' and user_id = %s and sdate >= %s and sdate <= %s
                    ORDER BY sdate desc
                """,(uid, sdate, edate))

                return [{'usuario_id': row[0], 'fecha': row[1]} for row in cur.fetchall()]
            finally:
                cur.close()
        finally:
            con.close()

    @classmethod
    def generarReporte(cls, inicio, fin, uid):
        session = Session()
        return Reporte.generarReporte(session, inicio, fin, uid)


    @classmethod
    def generarReporteUsuarios(cls, inicio, fin, uids):
        session = Session()
        return Reporte.generarReporteUsuarios(session, inicio, fin, uids)
