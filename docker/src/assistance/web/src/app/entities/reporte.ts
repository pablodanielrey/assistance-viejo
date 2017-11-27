export class Reporte {

  // horasTrabajadas: HorasTrabajadas
  total_segundos_trabajados: number;
  // fecha: Date;
  // horario: Horario;
  // usuario_id: string;


  contructor(values: Object = {}) {
    Object.assign(this, values);
  }

/*
  constructor(total_segundos_trabajados: number = 0) {
    this.total_segundos_trabajados = total_segundos_trabajados;
  }
  */

  public initialize(values: Object = {}) {
    Object.assign(this, values);
  }



}
