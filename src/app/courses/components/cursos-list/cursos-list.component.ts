import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from '../../model/curso';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

@Input() cursos:Curso[] = [];
@Output() add = new EventEmitter(false);
@Output() edit = new EventEmitter(false);
@Output() remove = new EventEmitter(false);

  constructor(

    ) { }

  ngOnInit(): void {
  }

  displayedColumns = ['name', 'category', 'actions']


  onAdd(){
    this.add.emit(true);
  }

  onEdit(course: Curso){
    this.edit.emit(course);
  }

  onDelete(course: Curso){
    this.remove.emit(course)
  }

}
