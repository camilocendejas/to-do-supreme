import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[];
  constructor(private tareaService: TareaService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService ) { }

  ngOnInit() {
    this.tareaService.tareaChanged
    .subscribe(
      (tareas: Tarea[]) => {
        this.tareas = tareas;
        console.log(this.tareas)                     
      }
    );
  this.tareas = this.tareaService.getTareas();
  }

  onNewTarea(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSaveData(){
    this.dataStorageService.storeTareas();
  }

  onFetchData(){
    this.dataStorageService.fetchTareas();
  }

}
