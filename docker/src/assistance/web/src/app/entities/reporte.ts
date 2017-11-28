export class Reporte {

  // horasTrabajadas: HorasTrabajadas[]
  total_segundos_trabajados: number;
  fecha: Date;
  // horario: Horario;
  // usuario_id: string;


  constructor(o:Object) {
    try {
      console.log(o);
      Object.assign(this, o);
      this.fecha = new Date(this.fecha);
      console.log(this.fecha);


      console.log('ahroa si convertido al objeto');
      console.log(<Reporte>o);


    } catch (e) {
      console.log(e);
    }
  }



}
