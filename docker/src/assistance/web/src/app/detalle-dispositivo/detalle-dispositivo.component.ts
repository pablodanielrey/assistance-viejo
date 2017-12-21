import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Dispositivo } from '../entities/dispositivo';
import { AsistenciaService } from '../asistencia.service';


@Component({
  selector: 'app-detalle-dispositivo',
  templateUrl: './detalle-dispositivo.component.html',
  styleUrls: ['./detalle-dispositivo.component.css']
})
export class DetalleDispositivoComponent implements OnInit {

  submitted : boolean = false;
  dispositivo: Dispositivo;

  constructor(private service: AsistenciaService) { }

  ngOnInit() {
    this.dispositivo = new Dispositivo(null);
  }

  guardar() {
    console.log(this.dispositivo);
    this.service.crearDispositivo(this.dispositivo).then(d => {
      console.log(d);
    });
  }

}
