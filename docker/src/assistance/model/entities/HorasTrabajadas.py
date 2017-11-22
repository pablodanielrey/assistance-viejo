

class HorasTrabajadas:

    TOLERANCIA_DUPLICADA = 5                # en minutos

    def __init__(self, fecha, logs=[], inicio=None, fin=None):
        self.fecha = fecha
        self.logs = logs
        self.inicio = inicio
        self.fin = fin
        self.segundos_trabajados = 0
        if fin:
            self.segundos_trabajados = (fin - inicio).seconds


    @classmethod
    def obtenerHorasTrabajadas(cls, session, uid, fecha):
        h = session.query(Horario).filter(Horario.usuario_id = uid, Horario.dia = fecha.weekday()).one_or_none()
        if not h:
            return None
        inicio, fin = hs.obtenerHorario(fecha)

        hs = []
        ls = []
        tolerancia = datetime.timedelta(minutes=cls.TOLERANCIA_DUPLICADA)

        ''' agrupo por tolerancia los logs '''
        for l in session.query(AttLog).filter(AttLog.log >= inicio, AttLog.log <= fin).all():
            try:
                grupo = ls[-1]
                ultimo = grupo[0].log + tolerancia
                if l.log <= ultimo:
                    grupo.append(l)
                else:
                    ls.append([l])

            except IndexError as e:
                ls.append([l])

        hs = []

        ''' agrupo de a 2 los grupos de tolernacia y los asigno a horas trabajadas '''
        for linicio, lfin in [(ls[i],ls[i+1]) for i in range(0,len(ls),2)]:
            h = None
            if len(lfin) <= 0:
                h = HorasTrabajadas(fecha, logs=linicio, inicio=linicio[0], fin=None)
            else:
                h = HorasTrabajadas(fecha, logs=linicio.extend(lfin), inicio=linicio[0], fin=lfin[-1])
            hs.append(h)

        return hs
