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

    this.creado = (this.creado == null ? null : new Date(this.creado));
    this.actualizado = (this.actualizado == null ? null : new Date(this.actualizado));
    this.vigencia_desde = (this.vigencia_desde == null ? null : new Date(this.vigencia_desde));

  }

  obtenerEntrada(date: Date) {
    return this.inicio == null ? null : new Date(date.getTime() + this.inicio * 1000);
  }

  obtenerSalida(date: Date) {
    return this.fin == null ? null : date ? new Date(date.getTime() + this.fin * 1000) : null;
  }

}
