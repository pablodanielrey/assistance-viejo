from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Boolean, Date, DateTime
from sqlalchemy.orm import relationship
from model_utils import Base

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
    habilitado = Column(Boolean)
    descripcion = Column(String)
    eliminado = Column(DateTime)
