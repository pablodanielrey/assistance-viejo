export class Reporte {

  // horasTrabajadas: HorasTrabajadas[]
  total_segundos_trabajados: number;
  fecha: Date;
  // horario: Horario;
  // usuario_id: string;


  constructor(o:Object) {
    Object.assign(this, o);
    this.fecha = Date.parse(o['fecha']);
    console.log(this.fecha);
  }



}
