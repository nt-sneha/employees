import { Component, OnInit, NgModule } from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service'
import { Employee } from 'src/app/models/employee.model';

import { from } from 'rxjs';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
 onDelete(id: Number){
   this.employeeService.onDelete(id);
 }
}
