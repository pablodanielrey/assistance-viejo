import sys
import os
import datetime

from . import Session

from .entities import *

class DispositivosModel:

    @classmethod
    def obtenerDispositivos(cls):
        session = Session()
        return session.query(Dispositivo).order_by(Dispositivo.id).all()
