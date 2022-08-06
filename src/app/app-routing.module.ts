import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaDetalleComponent } from './tareas/tarea-detalle/tarea-detalle.component';
import { TareaStartComponent } from './tareas/tarea-start/tarea-start.component';

import { TareasComponent } from './tareas/tareas.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/tareas', pathMatch: 'full'},
  {path: 'tareas', component: TareasComponent, children: [
    {path: '', component: TareaStartComponent},
    {path: ':id', component: TareaDetalleComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
