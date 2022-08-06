import { EventEmitter } from "@angular/core";
import { Tarea } from "./tarea.model";

export class TareaService{
    tareaSelected = new EventEmitter<Tarea>();

    private tareas: Tarea[] = [
        new Tarea('Limpiar Gatos','limpiar areneros y sacar basura','8-4-2022','22:00'),
        new Tarea('Limpiar Gatitos','limpiar areneros y sacar basura','8-4-2022','22:00'),
        new Tarea('Limpiar Gatotes','limpiar areneros y sacar basura','8-4-2022','22:00')
    ];

    getTareas(){
        return this.tareas.slice();
    }

    getTarea(index: number){
        return this.tareas[index];
    }
}