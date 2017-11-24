import logging
import os
from sqlalchemy import create_engine
from sqlalchemy.schema import CreateSchema
from sqlalchemy.orm import sessionmaker

from model_utils import Base
from assistance.model.entities import AttLog

engine = create_engine('postgresql://{}:{}@{}:5432/{}'.format(
    os.environ['ASSISTANCE_OLD_DB_USER'],
    os.environ['ASSISTANCE_OLD_DB_PASSWORD'],
    os.environ['ASSISTANCE_OLD_DB_HOST'],
    os.environ['ASSISTANCE_OLD_DB_NAME']
), echo=True)

#engine.execute(CreateSchema('assistance'))
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

rs = engine.execute('select id, device_id, user_id, verifymode, log, created from assistance.attlog limit 1000')
s = Session()
for r in rs:
    s.execute('insert into asistencia.attlog (id, dispositivo_id, usuario_id, modo_verificacion, log) values (:id, :did, :uid, :mv, :l)',
        {
            'id':r[0],
            'did':r[1],
            'uid':r[2],
            'mv':r[3],
            'l':r[4]
        })

s.commit()

logging.getLogger().setLevel(logging.INFO)
for l in s.query(AttLog).all():
    logging.info(l.__json__())

if __name__ == '__main__':
