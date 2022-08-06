import { Component,Input, OnInit } from '@angular/core';
import { Tarea } from '../../tarea.model';


@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent implements OnInit {
@Input() tarea: Tarea;
@Input() index: number;


  ngOnInit(): void {
  }
}
