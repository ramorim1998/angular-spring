import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  list(): Curso[] {
    return [
      { _id: 1, name: 'cursinho 1', category: 'back-end' },
      { _id: 2, name: 'cursinho 2', category: 'back-end' },
      { _id: 3, name: 'cursinho 3', category: 'front-end' },
      { _id: 4, name: 'cursinho 4', category: 'front-end' },
    ];
  }
}
