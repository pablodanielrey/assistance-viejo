export class Reporte {

  // horasTrabajadas: HorasTrabajadas
  total_segundos_trabajados: number = 0;
  fecha: Date = new Date();
  // horario: Horario;
  usuario_id: string = '';

  contructor(values: Object = {}) {
      Object.assign(this, values)
  }

}
