import logging
import os
from sqlalchemy import create_engine
from sqlalchemy.schema import CreateSchema
from sqlalchemy.orm import sessionmaker

from model_utils import Base

engine = create_engine('postgresql://{}:{}@{}:5432/{}'.format(
    os.environ['ASSISTANCE_DB_USER'],
    os.environ['ASSISTANCE_DB_PASSWORD'],
    os.environ['ASSISTANCE_DB_HOST'],
    os.environ['ASSISTANCE_DB_NAME']
), echo=True)
Session = sessionmaker(bind=engine)



from .AssistanceModel import AssistanceModel

__all__ = [
    'AssistanceModel'
]


def crear_tablas():
    from .entities import AttLog, Horario, Usuario
    from sqlalchemy.schema import CreateSchema

    try:
        engine.execute(CreateSchema('assistance'))
    except Exception as e:
        logging.exception(e)

    try:
        Base.metadata.create_all(engine)
    except Exception as e:
        logging.exception(e)
