import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea.model';
import { TareaService } from './tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [TareaService]
})
export class TareasComponent implements OnInit {
  selectedTarea: Tarea;
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService.tareaSelected.subscribe(
      (tarea: Tarea) => {
        this.selectedTarea = tarea;
      }
      );
  }

}
