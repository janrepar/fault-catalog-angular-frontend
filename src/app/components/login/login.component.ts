import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User;
  public message: string = "";

  constructor(private authService: AuthService, private router: Router) {

  }

  register(user: User) {
    this.authService.register(user).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        if (err.status === 400) {
          this.message = "Username or password not provided.";
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
        const token  = response;
        localStorage.setItem('authToken', token);
        this.router.navigate(['home']);
      },
      (error) => {
        if (error.status === 400) {
          this.message = "Invalid username or password.";
        } else {
          this.message = "Login failed. Please try again later.";
        }
      });
    }
}
