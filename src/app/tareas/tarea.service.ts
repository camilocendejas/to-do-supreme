import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Tarea } from "./tarea.model";

@Injectable()
export class TareaService{
    
    tareaChanged = new Subject<Tarea[]>();

    // private tareas: Tarea[] = [
    //     new Tarea('Limpiar Gatos','limpiar areneros y sacar basura','2022-08-04','22:00'),
    //     new Tarea('Limpiar Gatitos','limpiar areneros y sacar basura','2022-08-05','21:00'),
    //     new Tarea('Limpiar Gatotes','limpiar areneros y sacar basura','2022-08-06','15:00')
    // ];

    private tareas: Tarea[] = [];

    setTareas(tareas: Tarea[]){
        this.tareas = tareas;
        this.tareaChanged.next(this.tareas.slice());
    }

    getTareas(){
        return this.tareas.slice();
    }

    getTarea(index: number){
        return this.tareas[index];
    }

    addTarea(tarea: Tarea){
        this.tareas.push(tarea);
        this.tareaChanged.next(this.tareas.slice());
    }

    updateTarea(index: number, nuevaTarea: Tarea){
        this.tareas[index] = nuevaTarea;
        this.tareaChanged.next(this.tareas.slice());
    }

    eliminarTarea(index:number){
        this.tareas.splice(index, 1);
        this.tareaChanged.next(this.tareas.slice());
    }
}