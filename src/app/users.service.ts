import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/userss")
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}






