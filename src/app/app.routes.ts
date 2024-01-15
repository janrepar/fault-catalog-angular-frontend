import { Routes } from '@angular/router';
import { FaultComponent } from './fault/fault.component';
import { SuccessCriterionComponent } from './success-criterion/success-criterion.component';


export const routes: Routes = [
    { path:'', component: FaultComponent },
    { path:'success-criteria', component: SuccessCriterionComponent }
];
