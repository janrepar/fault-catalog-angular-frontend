import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessCriterion } from '../models/success-criterion';
import { DataService } from '../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-success-criterion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './success-criterion.component.html',
  styleUrl: './success-criterion.component.css'
})
export class SuccessCriterionComponent {
  title = 'SuccessCriteria.UI'
  public successCriteria: Observable<SuccessCriterion[]>;

  constructor(private dataService: DataService) {
    this.successCriteria = dataService.getSuccessCriteria();
  }

  ngOnInit() : void {
    this.successCriteria = this.dataService.getSuccessCriteria();
    console.log(this.successCriteria);
  }
}