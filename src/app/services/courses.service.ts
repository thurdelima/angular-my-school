import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '@app/shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl = `${environment.apiUrl}courses`;
  private http = inject(HttpClient);

  // Common HTTP headers for CORS
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*', // Allow all origins
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
  });

  public get(currentPage: number, pageSize: number, category: string, search: string): Observable<HttpResponse<any>> {
    let url = `${this.baseUrl}?_page=${currentPage}&_limit=${pageSize}`;

    if (category) url = `${url}&category=${category}`;
    if (search) url = `${url}&q=${search}`;

    console.log(url);

    return this.http.get<Course[]>(`${url}`, {
      observe: 'response',
      headers: this.headers, // Attach headers
    });
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseUrl}`, course, { headers: this.headers });
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseUrl}/${id}`, course, { headers: this.headers });
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
}
