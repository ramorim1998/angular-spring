import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursosListComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
