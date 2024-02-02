import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessCriterion } from '../../models/success-criterion';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, map } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-success-criterion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './success-criterion.component.html',
  styleUrl: './success-criterion.component.css'
})
export class SuccessCriterionComponent {
  title = 'SuccessCriteria.UI'
  public successCriteria: Observable<SuccessCriterion[]>;
  public searchTerm: string = "";

  constructor(private dataService: DataService, private router: Router) {
    this.successCriteria = this.dataService.getSuccessCriteria();
  }

  fetchFaultsByRefId(refId: string) : void {
    this.router.navigate(['home', {refId: refId}]);
  }

  fetchSuccessCriteria() : void {
    this.successCriteria = this.dataService.getSuccessCriteria();
  } 

  // Search success criteria by title and refId
  searchSuccessCriteria(): void {
    if (this.searchTerm.trim() !== '') {
      this.successCriteria = this.successCriteria.pipe(
        map((successCriteria) =>
          successCriteria.filter(
            (successCriterion) =>
              successCriterion.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              successCriterion.refId.toString().includes(this.searchTerm.toLowerCase())
          )
        )
      );
    } else {
      this.fetchSuccessCriteria();
    }
  }
}