import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User;
  public message: string = "";

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {

  }

  register(user: User) {
    this.authService.register(user).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        if (err.status === 400) {
          this.message = "Username or password not provided or user already exists.";
        } else {
          this.message = "Registration failed. Please try again later.";
        }
      }
    });
  }

  login(user: User) {
    this.authService.login(user).subscribe(
      (response: any) => {
        console.log("Response:", response);
        
        sessionStorage.setItem("authToken", response);
        this.userService.saveUser(user.username);
        this.router.navigate(['home']);
      },
      (error) => {
        if (error.status === 400) {
          this.message = "Invalid username or password.";
        } 
      });
    }
}
