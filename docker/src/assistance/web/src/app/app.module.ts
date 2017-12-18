import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AsistenciaService } from './asistencia.service';
import { AppComponent } from './app.component';
import { ReporteListaComponent } from './reporte-lista/reporte-lista.component';
import { ListaDispositivosComponent } from './lista-dispositivos/lista-dispositivos.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReporteListaComponent,
    ListaDispositivosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AsistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
