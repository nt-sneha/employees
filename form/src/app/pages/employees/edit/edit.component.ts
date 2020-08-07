import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  
})
export class EditComponent implements OnInit {
   id:number;
   header:string;
   employee:Employee = {
     id:0,
     name:"",
     address:"",
     email:"",
     dob:"",
     doj:"",
     marrital_status:"",
     contact:0,

   };

  constructor(private router:Router, private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id = ~this.route.snapshot.paramMap.get('this.id');
    this.header = this .id === 0? 'Add Employee': 'Edit Employee';

    if(this.id !=0){
      this.employee =this.employeeService.onGetEmployee(this.id);
    }
  }

  onSubmit(form:NgForm){
     let employee:Employee = {
      id: form.value.id,
      name: form.value.name,
      address: form.value.address,
      email: form.value.email,
      dob: form.value.dob,
      doj: form.value.doj,
      marrital_status: form.value.marrital_status,
      contact: form.value.contact,
     }

     this.employeeService.onAdd(employee);
      this.router.navigateByUrl('')
  }

}
