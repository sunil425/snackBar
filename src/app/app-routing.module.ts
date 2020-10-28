import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'/employee-registration',pathMatch:'full'},
  {path:'employee-registration',component:EmployeeRegistrationComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'**',redirectTo:'employee-registration',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
