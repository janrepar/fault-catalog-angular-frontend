import { Component } from '@angular/core';
import { Fault } from '../models/fault';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-fault',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogClose],
  templateUrl: './create-fault.component.html',
  styleUrl: './create-fault.component.css'
})
export class CreateFaultComponent {
  public fault: Fault;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<CreateFaultComponent>) {
    this.fault = new Fault()  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dataService.createFault(this.fault)
        .subscribe({
          next: (result) => alert(result),
          error: (error) => alert(error)      
    })

    this.fault.title = "";
    this.fault.shortDescription = "";
    this.fault.description = "";
    this.fault.successCriterionRefIds = [];
  }

}
