import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/services';
const baseUrl2 = 'http://localhost:8080/calculo';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch services list
  getServices(): Observable<any> {
    return this.http
      .get(baseUrl)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch services
  getServiceId(id: any): Observable<any> {
    return this.http
      .get(baseUrl + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCalculoId(idTecnico: any, semanas: any): Observable<any> {
    return this.http
      .get(baseUrl2 + '/' + idTecnico + '/'+ semanas)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create services
  createService(service: any): Observable<any> {
    return this.http
      .post(
        baseUrl,
        JSON.stringify(service),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update service
  updateService(id: any, service: any): Observable<any> {
    return this.http
      .put(
        baseUrl + id,
        JSON.stringify(service),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete service
  deleteService(id: any) {
    return this.http
      .delete(baseUrl + id, this.httpOptions)
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