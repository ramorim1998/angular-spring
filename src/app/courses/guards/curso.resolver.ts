import { Curso } from './../model/curso';
import { CoursesService } from './../services/courses.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoResolver implements Resolve<Curso> {

  constructor(private service: CoursesService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if(route.params && route.params['id']){
      console.log('chegou aqui')
      return this.service.findById(route.params['id']);
    }
    return of({_id: '', name: '', category: '', licao: []});
  }
}
