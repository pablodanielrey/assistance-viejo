from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean, Date
from sqlalchemy.orm import relationship
from model_utils import Base
import datetime

class Huella(Base):

    __tablename__ = 'attlog'
    __table_args__ = {'schema':'assistance'}

    modo_verificacion = Column(Integer)
    log = Column(DateTime(timezone=True))

    usuario_id = Column(String, ForeignKey('asistencia.usuario_id'))
    usuario = relationship('Usuario')
