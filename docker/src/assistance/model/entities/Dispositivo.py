from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean, Date
from sqlalchemy.orm import relationship
from model_utils import Base
import datetime

class Dispositivo(Base):

    __tablename__ = 'dispositivo'
    __table_args__ = {'schema':'assistance'}

    nombre = Column(String)
    ip = Column(String)
    mascara = Column(String)
    router = Column(String)
    mac = Column(String)
    modelo = Column(String)
    serial = Column(String)
    fecha_del_producto = Column(DateTime)
    url = Column(String)
    algoritmo = Column(String)

    #usuario_id = Column(String, ForeignKey('assistance.usuario.id'))
    #usuario = relationship('Usuario')

    def __init__(self):
        pass
