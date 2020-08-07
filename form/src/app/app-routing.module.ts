import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EditComponent } from './pages/employees/edit/edit.component';

const routes: Routes = [
  
  {
    path:"employees/add/:id",
    component:EditComponent
  },
  {
    path:" employees/edit/:id",
    component:EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EditComponent,EmployeesComponent]