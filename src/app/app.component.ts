import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FaultComponent } from './components/fault/fault.component';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatToolbarModule, MatIconModule, FaultComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FaultCatalog';
  currentUser: any;

  constructor(private router: Router, private userService: UserService) {  

  }

  ngOnInit() : void {
    this.currentUser = this.userService.getUser();
    console.log(this.currentUser)
  }

  logout() : void {
    // Check if session storage is not undefiend and clear it on logout
    this.userService.clean();
    this.router.navigate(['']);
  }
}
