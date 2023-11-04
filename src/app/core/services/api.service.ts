import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:3000"
  apiUrl: string = ""

  constructor(private http: HttpClient) { }

  //#region Users
  getUserToAuth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
  }

  public getUsersToRegister2(UserName:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?userName=${UserName}`);
  }
  public getUsersToRegister(email:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  public AddUser(user:User): Observable<boolean>{
    return this.http.post(`${this.baseUrl}/users`,user).pipe(
      map(resp=>{return true}),
      catchError(error => of(false))
    );
  }


  //#endregion
}