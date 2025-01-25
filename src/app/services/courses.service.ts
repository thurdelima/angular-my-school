import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, Observable, take, throwError } from 'rxjs';
import { Course } from '@app/shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl = `${environment.apiUrl}courses`;
  private http = inject(HttpClient);


  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });

  public get(currentPage: number, pageSize: number, category: string, search: string): Observable<HttpResponse<any>> {
    let url = `${this.baseUrl}?_page=${currentPage}&_limit=${pageSize}`;

    if (category) url = `${url}&category=${category}`;
    if (search) url = `${url}&q=${search}`;

    console.log(url);

    return this.http.get<Course[]>(`${url}`, {
      observe: 'response',
      headers: this.headers,
    }).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/${id}`)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseUrl}`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseUrl}/${id}`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseUrl}/${id}`)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Backend returned code: ${err.status}: ${err.message}`
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
