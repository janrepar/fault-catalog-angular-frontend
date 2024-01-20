import { Routes } from '@angular/router';
import { FaultComponent } from './components/fault/fault.component';
import { SuccessCriterionComponent } from './components/success-criterion/success-criterion.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    { path:'home', component: FaultComponent },
    { path:'success-criteria', component: SuccessCriterionComponent },
    { path:'**', component: LoginComponent }
];
