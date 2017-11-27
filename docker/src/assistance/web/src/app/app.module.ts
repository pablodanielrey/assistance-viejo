import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';

import { AsistenciaService } from './asistencia.service';



import { AppComponent } from './app.component';
import { ReporteListaComponent } from './reporte-lista/reporte-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ReporteListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AsistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
