


export class Dispositivo {

  id: string = null;
  creado: Date = null;
  actualizado: Date = null;

  nombre: string = null;
  ip: string;
  mascara: string;
  router: string;
  mac: string;
  modelo: string;
  serial: string;
  fecha_del_producto: Date;
  url: string;
  algoritmo: string;
  habilitado: boolean;

  constructor(o:Object) {
    if (o) {
      Object.assign(this, o);

    this.fecha_del_producto = (this.fecha_del_producto == null ? null : new Date(this.fecha_del_producto));}
    this.creado = (this.creado == null ? null : new Date(this.creado));
    this.actualizado = (this.actualizado == null ? null : new Date(this.actualizado));
  }


}
