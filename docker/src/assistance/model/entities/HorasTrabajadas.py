from . import *

from model_utils import MyJsonBaseClass
import datetime

class HorasTrabajadas(MyJsonBaseClass):

    TOLERANCIA_DUPLICADA = 5                # en minutos
    TOLERANCIA_DIARIA = 60                  # en minutos

    def __init__(self, fecha, logs=[], inicio=None, fin=None):
        self.fecha = fecha
        self.logs = logs
        self.inicio = inicio
        self.fin = fin
        self.segundos_trabajados = 0
        if fin:
            self.segundos_trabajados = (fin - inicio).seconds


    @classmethod
    def obtenerHorasTrabajadas(cls, session, h, uid, fecha):

        if not h:
            return None
        inicio, fin = h.obtenerHorario(fecha)

        hs = []
        ls = []
        tolerancia = datetime.timedelta(minutes=cls.TOLERANCIA_DUPLICADA)
        toleranciaDiaria = datetime.timedelta() if h.diario else datetime.timedelta(minutes=cls.TOLERANCIA_DIARIA)

        tinicio, tfin = inicio - toleranciaDiaria, fin + toleranciaDiaria

        ''' agrupo por tolerancia los logs '''
        for l in session.query(AttLog).filter(AttLog.log >= tinicio, AttLog.log <= tfin).all():
            try:
                grupo = ls[-1]
                ultimo = grupo[0].log + tolerancia
                if l.log <= ultimo:
                    grupo.append(l)
                else:
                    ls.append([l])

            except IndexError as e:
                ls.append([l])
        if len(ls) % 2 > 0:
            ls.append(None)

        hs = []

        ''' agrupo de a 2 los grupos de tolernacia y los asigno a horas trabajadas '''
        for linicio, lfin in [(ls[i],ls[i+1]) for i in range(0,len(ls),2)]:
            h = None
            if lfin is None or len(lfin) <= 0:
                h = HorasTrabajadas(fecha, logs=linicio, inicio=linicio[0].log, fin=None)
            else:
                h = HorasTrabajadas(fecha, logs=linicio.extend(lfin), inicio=linicio[0].log, fin=lfin[-1].log)
            hs.append(h)

        return hs
