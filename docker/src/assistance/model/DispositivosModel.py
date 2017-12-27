import sys
import os
import datetime

from .entities import *
import logging
logging.getLogger().setLevel(logging.DEBUG)
import uuid

class DispositivosModel:

    @classmethod
    def obtenerDispositivos(cls, session):
        return session.query(Dispositivo).order_by(Dispositivo.id).all()

    @classmethod
    def obtenerDispositivo(cls, session, id):
        q = session.query(Dispositivo)
        if id:
            q = q.filter(Dispositivo.id == id)
        return q.one()

    @classmethod
    def actualizarDispositivo(cls, session, uid, datos):
        return ""

    @classmethod
    def crearDispositivo(cls, session, datos):
        d = Dispositivo()
        id = str(uuid.uuid4())
        d.id = id
        # session.add(d)
        logging.info(d)
        return d
