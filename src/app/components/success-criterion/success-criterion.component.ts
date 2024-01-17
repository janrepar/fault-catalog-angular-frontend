import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessCriterion } from '../../models/success-criterion';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-success-criterion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './success-criterion.component.html',
  styleUrl: './success-criterion.component.css'
})
export class SuccessCriterionComponent {
  title = 'SuccessCriteria.UI'
  public successCriteria: Observable<SuccessCriterion[]>;

  constructor(private dataService: DataService, private router: Router) {
    this.successCriteria = this.dataService.getSuccessCriteria();
  }

  fetchFaultsByRefId(refId: string) : void {
    this.router.navigate(['home', {refId: refId}]);
  }
}