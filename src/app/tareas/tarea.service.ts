import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Tarea } from "./tarea.model";

export class TareaService{
    tareaSelected = new EventEmitter<Tarea>();
    tareaChanged = new Subject<Tarea[]>();

    private tareas: Tarea[] = [
        new Tarea('Limpiar Gatos','limpiar areneros y sacar basura','08/04/2022','22:00'),
        new Tarea('Limpiar Gatitos','limpiar areneros y sacar basura','08/05/2022','22:00'),
        new Tarea('Limpiar Gatotes','limpiar areneros y sacar basura','08/06/2022','22:00')
    ];

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