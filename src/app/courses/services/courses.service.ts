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

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.http.get<Curso>(`${this.API}/${id}`);
  }

  save(record: Partial<Curso>): Observable<Curso>{
    if(record._id){

      return this.update(record);
    }

    return this.create(record);
  }

  findById(id: string){
    return this.http.get<Curso>(`${this.API}/${id}`)
  }

  private create(record: Partial<Curso>){
    return this.http.post<Curso>(this.API, record)
  }

  private update (record: Partial<Curso>){
    return this.http.put<Curso>(`${this.API}/${record._id}`, record)

  }

  delete (id: string){
    return this.http.delete(`${this.API}/${id}`).pipe(first())

  }

}
