import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl =  `${environment.apiUrl}courses`;
  private http = inject(HttpClient);

  public getCoursesById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>{`${this.baseUrl}/${id}`};
  }

  constructor() { }
}
