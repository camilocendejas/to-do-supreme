import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TareasComponent } from './tareas/tareas.component';
import { ListaTareasComponent } from './tareas/lista-tareas/lista-tareas.component';
import { TareaDetalleComponent } from './tareas/tarea-detalle/tarea-detalle.component';
import { TareaItemComponent } from './tareas/lista-tareas/tarea-item/tarea-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TareaStartComponent } from './tareas/tarea-start/tarea-start.component';
import { TareaEditComponent } from './tareas/tarea-edit/tarea-edit.component';
import { TareaService } from './tareas/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TareasComponent,
    ListaTareasComponent,
    TareaDetalleComponent,
    TareaItemComponent,
    DropdownDirective,
    TareaStartComponent,
    TareaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
