import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarea } from '../tarea.model';


import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tarea-edit',
  templateUrl: './tarea-edit.component.html',
  styleUrls: ['./tarea-edit.component.css']
})
export class TareaEditComponent implements OnInit {
  id  :number;
  editar = false;
  tareaForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private tareaServicio: TareaService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.editar = params['id'] != null;
          //console.log(this.editar);
          this.initForm();
      });
  }

  private initForm(){
    
    let nombreTarea = '';
    let detalleTarea = '';
    let fechaTarea = '';
    let horaTarea = '';

    if(this.editar){
      const tarea = this.tareaServicio.getTarea(this.id);
      nombreTarea = tarea.nombre;
      detalleTarea = tarea.detalle;
      fechaTarea = tarea.fecha;
      horaTarea = tarea.hora;
    }

    this.tareaForm = new FormGroup({
      'nombre': new FormControl(nombreTarea, Validators.required),
      'fecha': new FormControl(fechaTarea, Validators.required),
      'hora': new FormControl(horaTarea),
      'descripcion': new FormControl(detalleTarea)
    });
  }

  onSubmit(){
    //console.log(this.tareaForm);
    //const tareaNueva = new Tarea(this.tareaForm.value['nombre'],this.tareaForm.value['descripcion'],this.tareaForm.value['fecha'],this.tareaForm.value['hora'],);
    if(this.editar){
      this.tareaServicio.updateTarea(this.id, this.tareaForm.value);
    }else{
      this.tareaServicio.addTarea(this.tareaForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

