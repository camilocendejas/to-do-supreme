import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TareasComponent } from './tareas/tareas.component';
import { ListaTareasComponent } from './tareas/lista-tareas/lista-tareas.component';
import { TareaDetalleComponent } from './tareas/tarea-detalle/tarea-detalle.component';
import { TareaItemComponent } from './tareas/lista-tareas/tarea-item/tarea-item.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TareasComponent,
    ListaTareasComponent,
    TareaDetalleComponent,
    TareaItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }