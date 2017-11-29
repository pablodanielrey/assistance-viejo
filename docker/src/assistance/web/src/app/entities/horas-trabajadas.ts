import { AttLog } from './att-log'

export class HorasTrabajadas {

    fecha: Date;
    fin: Date;
    inicio: Date;
    logs: AttLog[];
    segundos_trabajados: number;

    constructor(o:Object) {
      Object.assign(this, o);

      this.fecha = this.parsearFecha(new Date(this.fecha));
      this.fin = (this.fin == null ? null : new Date(this.fin));
      this.inicio = new Date(this.inicio);
      this.logs = (this.logs == null ? [] : this.logs.map(l => new AttLog(l)));

    }

    parsearFecha(date: Date) {
      let d = new Date();
      d.setTime(date.getTime() + d.getTimezoneOffset()*60*1000);
      return d;
    }

}
