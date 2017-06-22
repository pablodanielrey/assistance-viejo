from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from model_utils import Base

class AttLog(Base):

    __tablename__ = 'attlog'
    __table_args__ = {'schema':'asistencia'}

    modo_verificacion = Column(Integer)
    log = Column(DateTime(timezone=True))

    dispositivo_id = Column(String)
    #dispositivo_id = Column(String, ForeignKey('asistencia.dispositivo.id'))
    #dispositivo = relationship('Dispositivo')

    usuario_id = Column(String)
    #usuario_id = Column(String, ForeignKey('profile.users.id'))
    #usuario = relationship('Usuario')
