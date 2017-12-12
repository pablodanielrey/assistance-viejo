
if __name__ == '__main__':

    import logging
    logging.getLogger().setLevel(logging.INFO)
    import os, sys
    from datetime import datetime, date, timedelta, time
    from dateutil.tz import tzlocal
    import requests
    from assistance.model import AssistanceModel

    if len(sys.argv) < 2:
        exit()

    usuarios_api = 'http://usuarios.econo.unlp.edu.ar/users/api/v1.0/'


    inicio = datetime(2013,11,22)
    fin = datetime.now()
    uid = sys.argv[1]

    usuario = requests.get(usuarios_api + 'usuarios/' + uid).json()
    nombre = usuario['apellido'] + ' ' + usuario['nombre']


    reporte = AssistanceModel.generarReporte(inicio, fin, uid)

    header = 'Usuario,Fecha,Dia,Horario Entrada,Horario Salida,Entrada,Salida,Horas Trabajadas'
    tz = tzlocal()
    week = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

    with open('carrizo.csv','w') as f:
        f.write(header + '\n')
        for r in reporte:
            entrada = '' if len(r.horasTrabajadas) < 1 else r.horasTrabajadas[0].inicio.astimezone(tz).time()
            salida = None if len(r.horasTrabajadas) <= 0 else r.horasTrabajadas[len(r.horasTrabajadas) - 1];
            salida = '' if salida is None or salida.fin is None else salida.fin.astimezone(tz).time()
            hs = timedelta(seconds=r.total_segundos_trabajados)

            if r.horario is None:
                f.write('{},{},{},-,-,{},{},{}\n'.format(nombre,r.fecha,week[r.fecha.weekday()],entrada,salida,hs))

            else:

                fecha_dt = datetime.combine(r.fecha, time.min, tz)
                he = r.horario.obtenerInicio(fecha_dt)
                hf = r.horario.obtenerFin(fecha_dt)

                f.write('{},{},{},{},{},{},{},{}\n'.format(nombre,r.fecha,week[r.fecha.weekday()],he.time(),hf.time(),entrada, salida, hs))
