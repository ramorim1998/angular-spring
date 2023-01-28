import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/cursos';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      first(),
      tap(cursos => {
        console.log(cursos)
      })
    );
  }

  save(record: Partial<Curso>): Observable<Curso>{
    console.log(record)
    return this.http.post<Curso>(this.API, record)
  }
}
