import { Component,Input, OnInit } from '@angular/core';
import { Tarea } from '../../tarea.model';
import { TareaService } from '../../tarea.service';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent implements OnInit {
@Input() tarea: Tarea;

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.tareaService.tareaSelected.emit(this.tarea);
  };
}
