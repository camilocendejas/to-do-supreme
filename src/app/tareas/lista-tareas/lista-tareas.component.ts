import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[];
  constructor(private tareaService: TareaService ) { }

  ngOnInit() {
    this.tareas = this.tareaService.getTareas();
  }

}
