import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.authUrl

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<User> {
    return this.http.post<User>(this.path + "register", user);
  }

  public login(user: User): Observable<string> {
    return this.http.post(this.path + "login", user, { responseType: "text" })
  }
}
