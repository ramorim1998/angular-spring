import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, delay } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Curso } from '../../model/curso';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]> | null = null;

  displayedColumns = ['name', 'category', 'actions']

  constructor(
    private cursoService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snack: MatSnackBar
  ) {
    this.refresh();
  }

  ngOnInit(): void { }

  refresh() {
    this.cursos$ = this.cursoService.list()
      .pipe(
        catchError(error => {
          this.onError('erro ao carregar cursos.')
          return of([])
        })
      );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute })
  }

  onEdit(curso: Curso) {
    this.router.navigate(['edit', curso._id], { relativeTo: this.activeRoute })
  }

  onRemove(curso: Curso) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.cursoService.delete(curso._id).subscribe(
          () => {
            this.snack.open('Curso removido com sucesso', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            })
            this.refresh();
          },
          () => this.onError('erro ao tentar remover curso')
        )
      }
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }
}
