import { Component, Inject } from '@angular/core';
import { Fault } from '../models/fault';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-create-fault',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './create-fault.component.html',
  styleUrl: './create-fault.component.css'
})
export class CreateFaultComponent {
  public fault: Fault;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<CreateFaultComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fault = new Fault()  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() : void {
    this.dataService.createFault(this.fault)
        .subscribe({
          next: () => alert("Napaka je uspešno dodana!"),
          error: (error) => alert(error)     
    })

    this.fault.title = "";
    this.fault.shortDescription = "";
    this.fault.description = "";
    this.fault.successCriterionRefIds = [];
  }

  editSubmit() : void {
    this.fault.id = this.data.id;
    this.fault.title = this.data.title;
    this.fault.shortDescription = this.data.shortDescription;
    this.fault.description = this.data.description;
    this.fault.successCriterionRefIds = this.data.successCriterionRefIds;

    // Remove empty elements from array if user chooses to delete some of successCriterionRefIds
    for(let i = this.fault.successCriterionRefIds.length; i > 0; i--) {
      if (this.fault.successCriterionRefIds[i] === "") this.fault.successCriterionRefIds.pop();
    }

    this.dataService.editFault(this.fault)
        .subscribe({
          next: () => alert("Napaka je uspešno posodobljena!"),
          error: (error) => alert(error)     
    })
  }
}
