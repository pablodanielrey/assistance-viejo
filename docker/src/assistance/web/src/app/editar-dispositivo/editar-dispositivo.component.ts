import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, ActivatedRoute } from '@angular/router';
import { AsistenciaService } from '../asistencia.service';
import { Dispositivo } from '../entities/dispositivo';

@Component({
  selector: 'app-editar-dispositivo',
  templateUrl: './editar-dispositivo.component.html',
  styleUrls: ['./editar-dispositivo.component.css']
})
export class EditarDispositivoComponent implements OnInit {

  title : String = "";
  private id: String = null;
  private sub;
  dispositivo: Dispositivo = null;

  constructor(private route: ActivatedRoute, private router: Router, private service: AsistenciaService) { }

  ngOnInit() {
    this.title = "NUEVO RELOJ";
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'] || null
      });

    if (this.id) {
      this.service.buscarDispositivo(this.id).then(d => {
        console.log(d);
        this.dispositivo = d;
      });
    } else {
      this.dispositivo = null;
    }
  }

  cancelar() {
     this.router.navigate(['/dispositivos']);
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
