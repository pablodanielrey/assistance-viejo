import { Component, OnInit } from '@angular/core';
import { Reporte } from '../reporte';
import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-reporte-lista',
  templateUrl: './reporte-lista.component.html',
  styleUrls: ['./reporte-lista.component.css']
})
export class ReporteListaComponent implements OnInit {

  nuevoReporte: Reporte = new Reporte();
  reportes: Reporte[] = [];

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    var uid = '41402561-94d7-4759-bf06-8247dc90fc75';
    var sdate = new Date();
    var edate = new Date();
    this.reportes = this.asistenciaService.buscarReporte(uid, sdate, edate);
  }

  agregarReporte() {
    /*
    this.asistenciaService.agregarReporte(this.nuevoReporte);
    this.buscar();
    this.nuevoReporte = new Reporte();
    */
  }



}
