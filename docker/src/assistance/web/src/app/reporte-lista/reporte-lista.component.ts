import { Component, OnInit } from '@angular/core';
import { Reporte } from '../reporte';

@Component({
  selector: 'app-reporte-lista',
  templateUrl: './reporte-lista.component.html',
  styleUrls: ['./reporte-lista.component.css']
})
export class ReporteListaComponent implements OnInit {

  nuevoReporte: Reporte = new Reporte();
  reportes: Reporte[] = [];

  constructor() { }

  ngOnInit() {

  }

  agregarReporte() {
    this.reportes.push(this.nuevoReporte);
    this.nuevoReporte = new Reporte();
  }



}
