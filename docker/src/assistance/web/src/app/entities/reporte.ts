import { Horario } from './horario'
import { HorasTrabajadas } from './horas-trabajadas'

export class Reporte {

  total_segundos_trabajados: number;
  fecha: Date;
  horario: Horario;
  horasTrabajadas: HorasTrabajadas[];
  usuario_id: string;


  constructor(o:Object) {
    try {
      Object.assign(this, o);
      this.fecha = new Date(this.fecha);
      this.horario = new Horario(this.horario);
      this.horasTrabajadas = this.horasTrabajadas.map(h => new HorasTrabajadas(h));
    } catch (e) {
      console.log(e);
    }
  }



}
