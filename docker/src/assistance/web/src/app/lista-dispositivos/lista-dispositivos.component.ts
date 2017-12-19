import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Dispositivo } from '../entities/dispositivo';

import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.component.html',
  styleUrls: ['./lista-dispositivos.component.css']
})
export class ListaDispositivosComponent implements OnInit {

  dispositivos: Dispositivo[] = [];
  constructor(private service: AsistenciaService) { }

  buscarDispositivos(service: AsistenciaService) {
    service.buscarDispositivos().then(ds => {
      for (let d of ds) {
        console.log(ds);
      }
    });
  }

  ngOnInit() {
    this.buscarDispositivos(this.service);
  }

}
