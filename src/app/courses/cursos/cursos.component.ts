import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Curso } from '../model/curso';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;

  displayedColumns = ['name', 'category']

  constructor(
    private cursoService: CoursesService,
    public dialog: MatDialog
  ) {
    this.cursos$ = this.cursoService.list()
      .pipe(
        catchError(error => {
          this.onError('erro ao carregar cursos.')
          return of([])
        })
      );
  }

  ngOnInit(): void {

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }
}
