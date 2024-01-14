import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fault } from '../../models/fault';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fault',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './fault.component.html',
  styleUrl: './fault.component.css'
})
export class FaultComponent {
  title = 'Fault.UI'
  public faults: Observable<Fault[]>;

  constructor(private dataService: DataService) {
    this.faults = dataService.getFaults();
  }

  ngOnInit() : void {
    this.faults = this.dataService.getFaults();
    console.log(this.faults);
  }
}
