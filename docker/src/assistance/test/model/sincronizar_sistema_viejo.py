
if __name__ == '__main__':

    import logging
    logging.getLogger().setLevel(logging.INFO)
    import os
    from sqlalchemy import create_engine
    from sqlalchemy.schema import CreateSchema
    from sqlalchemy.orm import sessionmaker

    from model_utils import Base
    from assistance.model.entities import AttLog, Horario, Usuario

    engine = create_engine('postgresql://{}:{}@{}:5432/{}'.format(
        os.environ['ASSISTANCE_DB_OLD_USER'],
        os.environ['ASSISTANCE_DB_OLD_PASSWORD'],
        os.environ['ASSISTANCE_DB_OLD_HOST'],
        os.environ['ASSISTANCE_DB_OLD_NAME']
    ), echo=True)

    engine2 = create_engine('postgresql://{}:{}@{}:5432/{}'.format(
        os.environ['ASSISTANCE_DB_USER'],
        os.environ['ASSISTANCE_DB_PASSWORD'],
        os.environ['ASSISTANCE_DB_HOST'],
        os.environ['ASSISTANCE_DB_NAME']
    ), echo=True)

    #engine.execute(CreateSchema('assistance'))
    #Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine2)
    s = Session()

    rs = engine.execute('select id, user_id, sdate, sstart, send, weekday, daily from assistance.schedules')

    for r in rs:
        hid = r[0]
        uid = r[1]
        date = r[2]
        sstart = r[3]
        send = r[4]
        wd = r[5]
        d = r[6]

        if (s.query(Usuario).filter(Usuario.id == uid).count() <= 0):
            u = Usuario()
            u.id = uid
            s.add(u)
            s.commit()

        if (s.query(Horario).filter(Horario.id == hid).count() <= 0):
            h = Horario(usuario_id=uid, vigencia_desde=date, inicio=sstart, fin=send, dia=wd, diario=d)
            h.id = hid
            logging.info('agregando horario : {}'.format(h.__json__()))
            s.add(h)
            s.commit()


    rs = engine.execute('select id, device_id, user_id, verifymode, log, created from assistance.attlog')
    for r in rs:
        uid = r[2]
        did = r[1]
        lid = r[0]
        mv = r[3]
        l = r[4]

        if (s.query(Usuario).filter(Usuario.id == uid).count() <= 0):
            u = Usuario()
            u.id = uid
            s.add(u)
            s.commit()

        if (s.query(AttLog).filter(AttLog.id == lid).count() <= 0):
            log = AttLog(usuario_id=uid, dispositivo_id=did, log=l, modo_verificacion=mv)
            log.id = lid
            logging.info('agregando log : {}'.format(log.__json__()))
            s.add(log)
            s.commit()

    for l in s.query(AttLog).all():
        logging.info(l.__json__())
