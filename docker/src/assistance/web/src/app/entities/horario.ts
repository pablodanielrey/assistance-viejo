export class Horario {

  id: string;
  creado: Date;
  actualizado: Date;
  dia: number;
  diario: boolean;
  fin: number;
  inicio: number;
  vigencia_desde: Date;

  constructor(o:Object) {
    Object.assign(this, o);

    this.creado = new Date(this.creado);
    this.actualizado = new Date(this.actualizado);
    this.vigencia_desde = new Date(this.vigencia_desde);

  }

  obtenerEntrada(date: Date) {
    return new Date(date.getTime() + this.inicio * 1000);
  }

  obtenerSalida(date: Date) {
    return date ? new Date(date.getTime() + this.fin * 1000) : null;
  }

}
