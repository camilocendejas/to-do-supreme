import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaDetalleComponent } from './tareas/tarea-detalle/tarea-detalle.component';
import { TareaEditComponent } from './tareas/tarea-edit/tarea-edit.component';
import { TareaStartComponent } from './tareas/tarea-start/tarea-start.component';

import { TareasComponent } from './tareas/tareas.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/tareas', pathMatch: 'full'},
  {path: 'tareas', component: TareasComponent, children: [
    {path: '', component: TareaStartComponent},
    {path: 'new', component: TareaEditComponent},
    {path: ':id', component: TareaDetalleComponent}, 
    {path: ':id/edit', component: TareaEditComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
