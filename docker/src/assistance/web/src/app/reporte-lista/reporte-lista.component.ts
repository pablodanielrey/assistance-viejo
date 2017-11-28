import { Component, OnInit } from '@angular/core';
import { Reporte } from '../entities/reporte';
import { AsistenciaService } from '../asistencia.service';


@Component({
  selector: 'app-reporte-lista',
  templateUrl: './reporte-lista.component.html',
  styleUrls: ['./reporte-lista.component.css']
})
export class ReporteListaComponent implements OnInit {

  nuevoReporte: Reporte;
  reportes: Reporte[] = [];
  sDate: Date = new Date();

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.sDate = new Date();
    this.fechaOrden = false;
  }

  buscar() {
    //let uid = '41402561-94d7-4759-bf06-8247dc90fc75';
    let uid = '89d88b81-fbc0-48fa-badb-d32854d3d93a';

    let edate = new Date();
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

  ordenar(asc: boolean) {
    this.fechaOrden = !this.fechaOrden;
    if(asc) {
      this.reportes = this.reportes.sort((h1, h2) => {
        return h1.fecha < h2.fecha ? -1 : (h1.fecha > h2.fecha) ? 1 : 0;
      });
    } else {
      this.reportes = this.reportes.sort((h2, h1) => {
        return h1.fecha < h2.fecha ? -1 : (h1.fecha > h2.fecha) ? 1 : 0;
      });
    }

  }



  obtenerMarcacionEntrada(rep: Reporte) {
    console.log(rep);
    return rep.horasTrabajadas.length < 1 ? null : rep.horasTrabajadas[0].inicio;
    /*
    let ht = ((rep.horasTrabajadas is null ) ? null : rep.horasTrabajadas[0]);
    ht = ((rep.horasTrabajadas == null and rep.horasTrabajadas.length < 1) ? null : rep.horasTrabajadas[0]);
    return (ht.inicio is undefined or  ht.inicio is null)? 0 : ht.inicio;
    */
  }

  obtenerMarcacionSalida(rep: Reporte) {
    let ht = (rep.horasTrabajadas is null && rep.horasTrabajadas.length <= 0 ? null : rep.horasTrabajadas[rep.horasTrabajadas.length - 1]);
    return (ht.fin is undefined or  ht.fin is null)? 0 : ht.fin;
  }

}
