import { Component, OnInit } from '@angular/core';
import { Reporte } from '../reporte';
import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-reporte-lista',
  templateUrl: './reporte-lista.component.html',
  styleUrls: ['./reporte-lista.component.css'],
  providers: [AsistenciaService]
})
export class ReporteListaComponent implements OnInit {

  nuevoReporte: Reporte = new Reporte();
  reportes: Reporte[] = [];

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.reportes = this.asistenciaService.buscarReporte();
  }

  agregarReporte() {
    this.asistenciaService.agregarReporte(this.nuevoReporte);
    this.buscar();
    this.nuevoReporte = new Reporte();
  }



}
