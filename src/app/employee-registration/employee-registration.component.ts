import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  employeeInfoForm:FormGroup;
  message="Details Saved Successfully"


  constructor(private fb:FormBuilder,private snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.employeeInfoForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      about:['',[Validators.required]],
      joining_date:['',[Validators.required]]
  }); 
  }

  get getEmployeeFormControls() { return this.employeeInfoForm.controls; }

  
  sumbit(){
    console.log(this.employeeInfoForm.value)
    this.snackBar.open(this.message,'', {
      duration: 2000,
    });

    localStorage.setItem('employeeInfoForm',JSON.stringify(this.employeeInfoForm.value))
    this.employeeInfoForm.reset();

    this.router.navigate(['/employee-list'])

  }

}
