import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Dispositivo } from '../entities/dispositivo';

@Component({
  selector: 'app-detalle-dispositivo',
  templateUrl: './detalle-dispositivo.component.html',
  styleUrls: ['./detalle-dispositivo.component.css']
})
export class DetalleDispositivoComponent implements OnInit {

  submitted : boolean = false;
  dispositivo: Dispositivo;

  constructor() { }

  ngOnInit() {
    this.dispositivo = new Dispositivo();
  }

  guardar() {
    console.log(this.dispositivo);
    this.submitted = true;
  }

}
