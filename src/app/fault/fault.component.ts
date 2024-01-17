import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fault } from '../models/fault';
import { DataService } from '../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateFaultComponent } from '../create-fault/create-fault.component';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'app-fault',
    standalone: true,
    templateUrl: './fault.component.html',
    styleUrl: './fault.component.css',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, ClipboardModule, CreateFaultComponent]
})
export class FaultComponent {
  title = 'Fault.UI'
  public faults: Observable<Fault[]>;

  constructor(private dataService: DataService, public dialog: MatDialog, private clipboard: Clipboard) {
    this.faults = dataService.getFaults();
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(CreateFaultComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.faults = this.dataService.getFaults();
    });
  }

  openDialogForEdit(fault : Fault) : void {
    const dialogRef = this.dialog.open(CreateFaultComponent, {data: {id: fault.id,
                                                                     title: fault.title,
                                                                     shortDescription: fault.shortDescription,
                                                                     description: fault.description,
                                                                     successCriterionRefIds: fault.successCriterionRefIds}});
                                                                     
      dialogRef.afterClosed().subscribe(() => {
      this.faults = this.dataService.getFaults();
    });
  }

  ngOnInit() : void {
    this.faults = this.dataService.getFaults();
    console.log(this.faults);
  }

  deleteFault(id : any) : void {
    this.dataService.deleteFault(id)
      .subscribe(() => {this.ngOnInit();})
    console.log("Fault with id " + id + " deleted");
  }

  copy(fault : Fault) {
    const clipboard = JSON.stringify(fault, undefined, 2);
    this.clipboard.copy(clipboard);
  }
}
