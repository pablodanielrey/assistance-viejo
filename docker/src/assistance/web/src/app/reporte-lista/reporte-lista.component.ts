import { Component, OnInit, ViewChild } from '@angular/core';
import { Reporte } from '../entities/reporte';
import { AsistenciaService } from '../asistencia.service';

import {MatTableDataSource, MatSort} from '@angular/material';
import {FormControl} from '@angular/forms';


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

   displayedColumns = ['usuario_id', 'fecha', 'dia', 'hentrada', 'hsalida','tentrada','entrada','tsalida','salida', 'hstrabajadas'];
   dataSource2 =  new MatTableDataSource(this.reportes);
   @ViewChild(MatSort) sort: MatSort;


  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.sDate = new Date();
    this.fechaOrden = false;
  }

  ngAfterViewInit() {
    this.dataSource2.sort = this.sort;
  }

  buscar() {

    // let uid = '0cd70f16-aebb-4274-bc67-a57da88ab6c7';
    let uid = 'b7c8fe8e-cc4e-4ede-aa3c-4cd411e91424';
    let sdate = new Date(this.sDate);
    let edate = new Date(this.eDate);
    let respuesta = this.asistenciaService.buscarReporte(uid, sdate, edate);
    respuesta.then(reporte => {
      this.reportes = reporte;
      this.dataSource2 = new MatTableDataSource(this.reportes);
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

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
]
