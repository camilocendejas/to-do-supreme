import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tarea } from "../tareas/tarea.model";


import { TareaService } from "../tareas/tarea.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private tareasServive: TareaService){}

    storeTareas(){
        const tareas = this.tareasServive.getTareas();
        this.http
        .put('https://todosupreme-8b3ec-default-rtdb.firebaseio.com/tareas.json',tareas)
        .subscribe(response => {console.log(response)});
    }

    fetchTareas(){
        this.http.get<Tarea[]>('https://todosupreme-8b3ec-default-rtdb.firebaseio.com/tareas.json')
        .subscribe(tareas => 
            {
                this.tareasServive.setTareas(tareas);
            });
    }
}