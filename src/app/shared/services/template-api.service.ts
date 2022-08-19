import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Template } from 'src/app/shared/interfaces/template';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateApiService {

  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
 };

 /*========================================
   CRUD Methods for consuming RESTful API
 =========================================*/

 // HttpClient API post() method => Create Template
 createEmployee(template: any): Observable<Template> {
   return this.http
     .post<Template>(
       this.apiURL + '/templates',
       JSON.stringify(template),
       this.httpOptions
     )
     .pipe(retry(1), catchError(this.handleError));
 }

 // HttpClient API get() method => Fetch Template list
 getTemplates(): Observable<Template> {
   return this.http
     .get<Template>(this.apiURL + '/templates')
     .pipe(retry(1), catchError(this.handleError));
 }


  // HttpClient API delete() method => Delete current Template
  deleteTemplate(id: any) {
   return this.http
     .delete<Template>(this.apiURL + '/templates/' + id, this.httpOptions)
     .pipe(retry(1), catchError(this.handleError));
 }


 // HttpClient API get() method => Fetch Clicked employee
 singlegetTemplate(id: any): Observable<Template> {
  return this.http
    .get<Template>(this.apiURL + '/templates/' + id)
    .pipe(retry(1), catchError(this.handleError));
}

// HttpClient API put() method => Update employee
editTemplate(id: any, template: any): Observable<Template> {
  return this.http
    .put<Template>(
      this.apiURL + '/templates/' + id,
      JSON.stringify(template),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
}

 // Error handling
 handleError(error: any) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // Get client-side error
     errorMessage = error.error.message;
   } else {
     // Get server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(() => {
     return errorMessage;
   });
 }
}
