from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from model_utils import Base

class AttLog(Base):

    __tablename__ = 'attlog'
    __table_args__ = {'schema':'assistance'}

    modo_verificacion = Column(Integer)
    log = Column(DateTime(timezone=True))

    dispositivo_id = Column(String)
    #dispositivo_id = Column(String, ForeignKey('asistencia.dispositivo.id'))
    #dispositivo = relationship('Dispositivo')

    usuario_id = Column(String)
    #usuario_id = Column(String, ForeignKey('profile.users.id'))
    #usuario = relationship('Usuario')


    def __init__(self, usuario_id=None, dispositivo_id=None, log=None, modo_verificacion=None):
        self.usuario_id = usuario_id
        self.dispositivo_id = dispositivo_id
        self.modo_verificacion = modo_verificacion
        self.log = log
