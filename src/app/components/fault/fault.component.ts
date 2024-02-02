import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fault } from '../../models/fault';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, map } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateFaultComponent } from '../create-fault/create-fault.component';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SingleSuccessCriterionComponent } from '../single-success-criterion/single-success-criterion.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-fault',
    standalone: true,
    templateUrl: './fault.component.html',
    styleUrl: './fault.component.css',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, ClipboardModule, CreateFaultComponent, RouterLink, RouterLinkActive, RouterOutlet, RouterModule, FormsModule, MatFormFieldModule, MatInputModule]
})
export class FaultComponent {
  title = 'Fault.UI'
  public faults!: Observable<Fault[]>;
  public searchTerm: string = "";

  constructor(private dataService: DataService, public dialog: MatDialog, private clipboard: Clipboard, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let refId = params["refId"];
      if(refId) {
        this.faults = dataService.getFaultsBySuccessCriterionRefId(refId);
      } else {
        this.faults = dataService.getFaults();
      }
    })
  }

  // Open dialog form for adding a new fault
  openDialog() : void {
    const dialogRef = this.dialog.open(CreateFaultComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.faults = this.dataService.getFaults();
    });
  }

  showSuccessCriterion(refId : string) : void {
    this.dialog.open(SingleSuccessCriterionComponent, {data: {refId}})
    console.log("Showing success criterion " + refId)
  }

  // Open dialog form for editing fault and use the fault that user wishes to edit data into the form
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

  fetchFaults() : void {
    this.faults = this.dataService.getFaults();
    console.log(this.faults);
  }
  
  // Delete fault and refresh faults on page
  deleteFault(id : any) : void {
    this.dataService.deleteFault(id)
      .subscribe(() => {this.fetchFaults();})
    console.log("Fault with id " + id + " deleted");
  }

  // Copy to clipboard (TODO: not finished outputs json data)
  copy(fault : Fault) {
    const clipboard = JSON.stringify(fault, undefined, 2);
    this.clipboard.copy(clipboard);
  }

  // Search faults by name
  searchFaults(): void {
    if (this.searchTerm.trim() !== '') {
      this.faults = this.faults.pipe(
        map((faults) =>
          faults.filter(
            (fault) =>
              fault.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              fault.shortDescription.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              fault.description.toLowerCase().includes(this.searchTerm.toLowerCase()) 
          )
        )
      );
    } else {
        this.fetchFaults();
    }
  }
}

