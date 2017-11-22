from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from model_utils import Base

class Horario(Base):

    __tablename__ = 'horario'
    __table_args__ = {'schema':'asistencia'}

    dia = Column(String)
    inicio = Column(Integer)
    fin = Column(Integer)
    diario = Column(Boolean)

    usuario_id = Column(String, ForeignKey('asistencia.usuarios.id'))
    usuario = relationship('Usuario')

    def obtenerInicio(self, date):
        return date.replace(seconds=0, hour=0, minute=0) + datetime.timedelta(seconds=self.inicio)

    def obtenerFin(self, date):
        return date.replace(seconds=0, hour=0, minute=0) + datetime.timedelta(seconds=self.fin)

    def obtenerDiaSemanal(self):
        return self.dia.weekday()
