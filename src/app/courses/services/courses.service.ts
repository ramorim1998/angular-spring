import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/cursos.json';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(cursos => {
        console.log(cursos)
      })
    );
  }
}
