import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './containers/cursos/cursos.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'new', component: CursoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
