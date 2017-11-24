import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
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
    FormsModule
  ],
  providers: [AsistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
