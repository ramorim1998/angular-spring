import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]>;

  displayedColumns = ['name','category']

  constructor(private cursoService: CoursesService) {
    this.cursos = this.cursoService.list();
  }

  ngOnInit(): void {

  }

}
