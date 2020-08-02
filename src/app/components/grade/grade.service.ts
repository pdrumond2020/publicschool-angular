import { Grade } from './grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private readonly baseUrl = `${environment.API}grade`;  
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }

  read(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.baseUrl).pipe(
      map(obj => obj.data),
      catchError(e => this.errorHandler(e))
    )
  }

  create(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.baseUrl, grade).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Grade> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Grade>(url).pipe(
      map(obj => obj.data),
      catchError(e => this.errorHandler(e))
    )
  }

  update(grade: Grade): Observable<Grade> {
    const url = `${this.baseUrl}/${grade.id}`
    return this.http.put<Grade>(url, grade).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Grade> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Grade>(url).pipe(
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
