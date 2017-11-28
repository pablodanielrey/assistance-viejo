import { Component, OnInit } from '@angular/core';

import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.component.html',
  styleUrls: ['./lista-dispositivos.component.css']
})
export class ListaDispositivosComponent implements OnInit {

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
