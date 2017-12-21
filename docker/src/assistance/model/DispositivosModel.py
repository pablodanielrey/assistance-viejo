import sys
import os
import datetime

from .entities import *
import logging
logging.getLogger().setLevel(logging.DEBUG)

class DispositivosModel:

    @classmethod
    def obtenerDispositivos(cls, session):
        return session.query(Dispositivo).order_by(Dispositivo.id).all()

    @classmethod
    def actualizarDispositivo(cls, session, uid, datos):
        return ""

    @classmethod
    def crearDispositivo(cls, session, datos):
        '''
        s = Sincronizacion(
            id=u['id'],
            dni=u['dni'],
            clave_id=clave['id'],
            clave=clave['clave'],
            clave_actualizada=parse(clave['actualizado']) if clave['actualizado'] and clave['actualizado'] != 'null' else parse(clave['creado']),
            emails=emails
        )
        session.add(s)
        '''

        logging.info(datos)
        return ""
