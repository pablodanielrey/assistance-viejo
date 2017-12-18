import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteListaComponent } from './reporte-lista/reporte-lista.component';
import { ListaDispositivosComponent } from './lista-dispositivos/lista-dispositivos.component';


const routes: Routes = [
  { path: 'reportes', component: ReporteListaComponent },
  { path: 'dispositivos', component: ListaDispositivosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
