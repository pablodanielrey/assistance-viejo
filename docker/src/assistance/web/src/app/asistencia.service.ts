import { Injectable } from '@angular/core';
import { Reporte } from './reporte';


@Injectable()
export class AsistenciaService {

  reportes: Reporte[] = [];

  constructor() { }

  buscarReporte(): Reporte[] {
    return this.reportes;
  }

  agregarReporte(reporte: Reporte) {
    this.reportes.push(reporte);
  }

}
