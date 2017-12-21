


export class Dispositivo {

  id: string;
  creado: Date;
  actualizado: Date;

  nombre: string;
  ip: string;
  mascara: string;
  router: string;
  mac: string;
  modelo: string;
  serial: string;
  fecha_del_producto: string;
  url: string;
  algoritmo: string;
  habilitado: boolean;

  constructor(o:Object) {
    Object.assign(this, o);
    this.creado = (this.creado == null ? null : new Date(this.creado));
    this.actualizado = (this.actualizado == null ? null : new Date(this.actualizado));
  }


}
