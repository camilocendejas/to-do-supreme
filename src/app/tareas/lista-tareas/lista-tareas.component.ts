import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[];
  constructor(private tareaService: TareaService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.tareaService.tareaChanged.subscribe(
      (tareas: Tarea[]) => {this.tareas = tareas}
    );
    this.tareas = this.tareaService.getTareas();
  }

  onNewTarea(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
