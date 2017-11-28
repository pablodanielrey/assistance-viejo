


export class Dispositivo {

  id: string;
  creado: Date;
  actualizado: Date;

  constructor(o:Object) {
    Object.assign(this, o);
    this.creado = new Date(this.creado);
    this.actualizado = new Date(this.actualizado);
  }


}
