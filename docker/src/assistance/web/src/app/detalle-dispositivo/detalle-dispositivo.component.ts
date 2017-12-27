import { Component, OnInit, Input } from '@angular/core';
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
  @Input() dispositivo: Dispositivo;
  nuevo: boolean = false;

  constructor(private service: AsistenciaService) { }

  ngOnInit() {
    if (!this.dispositivo) {
      this.dispositivo = new Dispositivo(null);
      this.nuevo = true;
    }
    console.log(this.dispositivo);
  }

  guardar() {
    if (this.nuevo) {
      this.service.crearDispositivo(this.dispositivo).then(d => {
        console.log(d);
      });
    } else {
      console.log("Modificando");
    }
  }

}
