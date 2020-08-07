import { Injectable } from '@angular/core';
import {Employee} from '../models/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
  ];
 
  constructor() { }

  onGet(){
    return this.employees;
  }
  onGetEmployee(id:Number){
    return this.employees.find(x=>x.id === id);
  }
  onAdd(employee:Employee){
    this.employees.push(employee);
  }
onDelete(id:Number){
  let employee =this.employees.find(x=>x.id === id);
  let index = this.employees.indexOf(employee,0);
  this.employees.splice(index,1);
}
 
}
