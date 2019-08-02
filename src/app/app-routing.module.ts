import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmpComponent} from './add-emp/add-emp.component'
import {ListEmpComponent} from './list-emp/list-emp.component'
const routes: Routes = [
  {path: 'add-emp',component:AddEmpComponent},
  {path: 'list-emp',component: ListEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
