import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { SuccessCriterion } from '../../models/success-criterion';
import { DataService } from '../../services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-single-success-criterion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './single-success-criterion.component.html',
  styleUrl: './single-success-criterion.component.css'
})
export class SingleSuccessCriterionComponent {
  public successCriterion: Observable<SuccessCriterion>;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<SingleSuccessCriterionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.successCriterion = this.dataService.getSuccessCriterion(this.data.refId);
  }
}
