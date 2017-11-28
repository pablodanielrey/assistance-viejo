export class AttLog {

  id: string;
  creado: Date;
  actualizado: Date;
  modo_verificacion: number;
  log: Date;
  dispositivo_id: string;
  usuario_id: string;

  constructor(o:Object) {
    Object.assign(this, o);
    this.creado = new Date(this.creado);
    this.actualizado = new Date(this.actualizado);
    this.log = new Date(this.log);
  }

}
