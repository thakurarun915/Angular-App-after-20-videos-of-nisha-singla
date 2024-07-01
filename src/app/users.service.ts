import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
   url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.url + 'users')
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}







