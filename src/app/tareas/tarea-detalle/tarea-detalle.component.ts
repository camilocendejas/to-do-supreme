import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.css']
})
export class TareaDetalleComponent implements OnInit {
  tareas: Tarea;
  id: number;
  constructor(private tareaService: TareaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.tareas = this.tareaService.getTarea(this.id);
      }
    )
  }

}
