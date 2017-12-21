import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteListaComponent } from './reporte-lista/reporte-lista.component';
import { ListaDispositivosComponent } from './lista-dispositivos/lista-dispositivos.component';
import { EditarDispositivoComponent } from './editar-dispositivo/editar-dispositivo.component';
import { DetalleDispositivoComponent } from './detalle-dispositivo/detalle-dispositivo.component';

const routes: Routes = [
  { path: 'reportes', component: ReporteListaComponent },
  { path: 'dispositivos', component: ListaDispositivosComponent },
  { path: 'editar-dispositivo/:id', component: EditarDispositivoComponent },
  { path: 'editar-dispositivo', component: EditarDispositivoComponent },
  { path: 'detalle-dispositivo', component: DetalleDispositivoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
