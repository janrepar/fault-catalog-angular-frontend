import { Component } from '@angular/core';
import { Fault } from '../../models/fault';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-fault',
  standalone: true,
  imports: [],
  templateUrl: './fault.component.html',
  styleUrl: './fault.component.css'
})
export class FaultComponent {
  title = 'Fault.UI'
  faults: Fault[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() : void {
    this.faults = this.dataService.getFaults();
    console.log(this.faults);
  }
}
