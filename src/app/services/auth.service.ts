import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.authUrl

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<User> {
    return this.http.post<User>(this.path + "register", user, httpOptions);
  }

  public login(user: User): Observable<any> {
    return this.http.post(this.path + "login", user, {responseType: "text"},);
  }
}
