import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Dispositivo } from '../entities/dispositivo';

import { AsistenciaService } from '../asistencia.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.component.html',
  styleUrls: ['./lista-dispositivos.component.css']
})
export class ListaDispositivosComponent implements OnInit {

  dispositivos: Dispositivo[] = [];
  constructor(private service: AsistenciaService, private router: Router) { }

  buscarDispositivos() {
    this.service.buscarDispositivos().then(ds => {
      console.log(ds[0]);
      this.dispositivos = ds;
    });
  }

  ngOnInit() {
    this.buscarDispositivos();
  }

  editarDispositivo(item:Dispositivo) {
     this.router.navigate(['/editar-dispositivo'], { queryParams: { id: item.id } });
  }

}
