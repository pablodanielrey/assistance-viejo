class HorarioTrabajado:

    tolerancia = 5 * 60

    def __init__(self, logs=[]):
        self.logs = logs

    def obtenerInicio(self):
        if len(self.logs) <= 0:
            return None

    def obtenerFin(self):
        if len(self.logs) < 2:
            return None
