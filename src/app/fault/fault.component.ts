import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fault } from '../models/fault';
import { DataService } from '../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateFaultComponent } from '../create-fault/create-fault.component';

@Component({
  selector: 'app-fault',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './fault.component.html',
  styleUrl: './fault.component.css'
})
export class FaultComponent {
  title = 'Fault.UI'
  public faults: Observable<Fault[]>;

  constructor(private dataService: DataService, public dialog: MatDialog ) {
    this.faults = dataService.getFaults();
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(CreateFaultComponent);
  }

  ngOnInit() : void {
    this.faults = this.dataService.getFaults();
    console.log(this.faults);
  }

}
