import { Component, OnInit } from '@angular/core';
import { Reporte } from '../entities/reporte';
import { AsistenciaService } from '../asistencia.service';


@Component({
  selector: 'app-reporte-lista',
  templateUrl: './reporte-lista.component.html',
  styleUrls: ['./reporte-lista.component.css']
})
export class ReporteListaComponent implements OnInit {

  nuevoReporte: Reporte = new Reporte();
  reportes: Reporte[] = [];
  sDate: Date = new Date();

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.sDate = new Date();
  }

  buscar() {
    var uid = '41402561-94d7-4759-bf06-8247dc90fc75';

    var edate = new Date();
    let sdate = new Date(this.sDate);
    console.log(sdate);
    console.log(edate);
    let respuesta = this.asistenciaService.buscarReporte(uid, sdate, edate);
    respuesta.then(reporte => {
      for (let r of reporte) {
          console.log('report:');
          console.log(r);
      }
      this.reportes = reporte;
    });
  }

  agregarReporte() {
    /*
    this.asistenciaService.agregarReporte(this.nuevoReporte);
    this.buscar();
    this.nuevoReporte = new Reporte();
    */
  }



}
