from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean, Date, ARRAY
from sqlalchemy.orm import relationship
from model_utils import Base
import datetime
from .Usuario import Usuario

class TipoJustificacion(Base):

    __tablename__ = 'tipo_justificacion'
    __table_args__ = {'schema':'assistance'}

    nombre = Column(String)
    codigo = Column(String)
    descripcion = Column(String)

class Justificacion(Base):

    __tablename__ = 'justificacion'
    __table_args__ = {'schema':'assistance'}

    fecha = Column(Date)
    tipo = Column(String)
    reloj = Column(String)
    usuario_id = Column(String, ForeignKey('assistance.usuario.id'))
    usuario = relationship('Usuario', back_populates='justificaciones')

class JustificacionGeneral(Base):

    __tablename__ = 'justificacion_general'
    __table_args__ = {'schema':'assistance'}

    fecha = Column(Date)
    relojes = Column(ARRAY(String))
    tipo = Column(String)
