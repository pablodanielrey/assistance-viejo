from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from model_utils import Base

class Horario(Base):

    __tablename__ = 'horario'
    __table_args__ = {'schema':'asistencia'}

    dia = Column(String)
    inicio = Column(Integer)
    cantidad_horas = Column(Integer)

    usuario_id = Column(String, ForeignKey('asistencia.usuarios.id'))
    usuario = relationship('Usuario')
