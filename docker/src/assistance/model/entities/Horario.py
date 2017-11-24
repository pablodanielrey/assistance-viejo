from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean, Date
from sqlalchemy.orm import relationship
from model_utils import Base

class Horario(Base):

    __tablename__ = 'horario'
    __table_args__ = {'schema':'assistance'}

    vigencia_desde = Column(Date)
    dia = Column(Integer)
    inicio = Column(Integer)
    fin = Column(Integer)
    diario = Column(Boolean)

    usuario_id = Column(String, ForeignKey('assistance.usuario.id'))
    usuario = relationship('Usuario')


    def obtenerInicio(self, date):
        return date.replace(seconds=0, hour=0, minute=0) + datetime.timedelta(seconds=self.inicio)

    def obtenerFin(self, date):
        return date.replace(seconds=0, hour=0, minute=0) + datetime.timedelta(seconds=self.fin)

    def obtenerDiaSemanal(self):
        return self.dia.weekday()

    def obtenerHorario(self, fecha):
        dt = datetime.datetime.combine(fecha, datetime.time(0))
        if self.diario:
            inicio = dt
            fin = dt + datetime.timedelta(hours=24)
        else:
            inicio = dt + datetime.timedelta(seconds=self.inicio)
            fin = dt + datetime.timedelta(seconds=self.fin)
        return (inicio, fin)
