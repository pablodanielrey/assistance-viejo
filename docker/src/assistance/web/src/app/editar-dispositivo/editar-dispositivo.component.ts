import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-editar-dispositivo',
  templateUrl: './editar-dispositivo.component.html',
  styleUrls: ['./editar-dispositivo.component.css']
})
export class EditarDispositivoComponent implements OnInit {

  title:String=""

  constructor() { }

  ngOnInit() {
    this.title = "NUEVO RELOJ"
  }

}
