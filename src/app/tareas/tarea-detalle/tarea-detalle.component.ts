import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(private tareaService: TareaService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.tareas = this.tareaService.getTarea(this.id);
      }
    )
  }

  onEditTarea(){
    this.route.navigate(['edit'], {relativeTo: this.router});
  }

  onEliminateTarea(){
    this.tareaService.eliminarTarea(this.id);
    this.route.navigate(['/tareas']);
  }

}
