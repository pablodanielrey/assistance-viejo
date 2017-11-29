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
    console.log(this.sDate);
    console.log(this.eDate);
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


  obtenerHorasTrabajadas(rep:Reporte) {
    let min_total =  rep.total_segundos_trabajados / 60;
    let min = Math.ceil(min_total % 60);
    let hs = Math.trunc(min_total / 60);
    let min_str = min < 10 ? '0' + min : min;
    return hs + ':' + min_str;
  }

  obtenerMarcacionEntrada(rep: Reporte) {
    return rep.horasTrabajadas.length < 1 ? null : rep.horasTrabajadas[0].inicio;
  }

  obtenerTipoMarcacionEntrada(rep: Reporte) {
    return rep.horasTrabajadas.length < 1 ? null : rep.horasTrabajadas[0].logs[0].modo_verificacion;
  }

  obtenerMarcacionSalida(rep: Reporte) {
    let ht = (rep.horasTrabajadas.length <= 0 ? null : rep.horasTrabajadas[rep.horasTrabajadas.length - 1]);
    return ht == null ? null : ht.fin;
  }

  obtenerTipoMarcacionSalida(rep: Reporte) {
    let ht = (rep.horasTrabajadas.length <= 0 ? null : rep.horasTrabajadas[rep.horasTrabajadas.length - 1]);
    console.log(ht);
    return ht == null  || ht.fin == null ? null : ht.logs[ht.logs.length - 1].modo_verificacion;
  }

  obtenerDia(rep:Reporte) {
    let semana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    return semana[rep.horario.dia];
  }

}
