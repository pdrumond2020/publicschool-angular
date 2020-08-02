import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { School } from './school.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private readonly baseUrl = `${environment.API}school`;  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }

  create(school: School): Observable<School> {
    return this.http.post<School>(this.baseUrl, school).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<School[]> {
    return this.http.get<School[]>(this.baseUrl).pipe(
      map(obj => obj.data),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<School> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<School>(url).pipe(
      map(obj => obj.data),
      catchError(e => this.errorHandler(e))
    )
  }

  update(school: School): Observable<School> {
    const url = `${this.baseUrl}/${school.id}`
    return this.http.put<School>(url, school).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<School> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<School>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}