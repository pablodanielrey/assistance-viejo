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
  eDate: Date = new Date();
  fechaOrden: boolean;

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.sDate = new Date();
    this.fechaOrden = false;
  }

  buscar() {
    let uid = '0cd70f16-aebb-4274-bc67-a57da88ab6c7';
    // let uid = '89d88b81-fbc0-48fa-badb-d32854d3d93a';

    let sdate = new Date(this.sDate);
    let edate = new Date(this.eDate);
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
  }

  obtenerMarcacionSalida(rep: Reporte) {
    let ht = (rep.horasTrabajadas.length <= 0 ? null : rep.horasTrabajadas[rep.horasTrabajadas.length - 1]);
    return ht.fin;

  }

}
