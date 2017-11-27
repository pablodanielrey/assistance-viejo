import datetime
from .HorasTrabajadas import HorasTrabajadas
from .Horario import Horario
from model_utils import MyJsonBaseClass

class Reporte(MyJsonBaseClass):

    def __init__(self, uid, fecha, horario, horasTrabajadas=[]):
        self.horasTrabajadas = horasTrabajadas
        self.total_segundos_trabajados = 0
        self.fecha = fecha
        self.horario = horario
        self.usuario_id = uid

        for ht in self.horasTrabajadas:
            self.total_segundos_trabajados = self.total_segundos_trabajados + ht.segundos_trabajados



    @classmethod
    def generarReporte(cls, session, fechaInicio, fechaFin, uid):
        if fechaInicio > fechaFin:
            return []

        reportes = []

        for i in range(0, (fechaFin - fechaInicio).days + 1):
            actual = fechaInicio + datetime.timedelta(days=i)

            q = session.query(Horario)
            q = q.filter(Horario.usuario_id == uid, Horario.dia == actual.weekday(), Horario.vigencia_desde <= actual.date())
            q = q.order_by(Horario.vigencia_desde.desc())
            horario = q.limit(1).one_or_none()

            ht = HorasTrabajadas.obtenerHorasTrabajadas(session, horario, uid, actual)
            ht = [] if ht is None else ht
            r = Reporte(uid, actual, horario, ht)
            reportes.append(r)

        return reportes

    @classmethod
    def generarReporteUsuarios(cls, session, fechaInicio, fechaFin, uids):
        reportes = {}
        for uid in uids:
            reportes[uid] = cls.generarReporte(session, fechaInicio, fechaFin, uid)
        return reportes
