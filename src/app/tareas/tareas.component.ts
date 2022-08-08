import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea.model';
import { TareaService } from './tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
  
})
export class TareasComponent implements OnInit {
  selectedTarea: Tarea;
  constructor() { }

  ngOnInit(): void {

  }

}
