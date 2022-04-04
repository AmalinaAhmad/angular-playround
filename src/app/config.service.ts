import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface Data {
  id: Number;
  name: String;
  time: Number;
}

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  endpoint = 'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=sepang';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getUsers(): Observable<Data> {
    return this.httpClient
      .get<Data>(this.endpoint)
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
