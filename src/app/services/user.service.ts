import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem("username");
    window.sessionStorage.setItem("username", user);
  }

  public getUser(): any {
    const username = window.sessionStorage.getItem("username");
    if (username) {
      return username;
    }

    return "";
  }

  public isLoggedIn(): boolean {
    const username = window.sessionStorage.getItem("username");
    if (username) {
      return true;
    }

    return false;
  }
}

