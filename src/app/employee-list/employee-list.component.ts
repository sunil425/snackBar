import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeInfo:any
  showDetails=true;
  message="Details Removed Successfully"
  
  constructor(private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeeInfo=JSON.parse(localStorage.getItem('employeeInfoForm'))
    console.log(this.employeeInfo)

  }

  removeDetails(){
    localStorage.removeItem('employeeInfoForm');
    this.showDetails=false
    this.router.navigate(['/employee-registration'])
    this.snackBar.open(this.message,'', {
      duration: 2000,
    });

  }
}
