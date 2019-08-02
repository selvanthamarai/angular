import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Iemployee } from '../interfaces/iemployee'
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { format } from 'url';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import {DataService} from '../services/data.service';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  employees: Iemployee = {
    id: '',
    name: '',
    age: '',
    email: ''
  }
  public editId;
  registerForm: FormGroup;
  submitted = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef,private dataService:DataService,private router:Router) {

    //this.route.queryParams.subscribe(i => console.log("sasa",i));
  }

  ngOnInit() {



    this.route.queryParams.subscribe(id => {
      console.log('i am id --->>>>', id);
      this.editId = id.employees
      console.log("-------------->>>>>>>>>>", this.editId)


    });



    // this.route.queryParams
    // .filter(params => params.employees)
    // .subscribe(params => {
    //   console.log(params); // {order: "popular"}

    //   this.employees = params.employees;
    //   console.log(this.employees); // popular
    // });

    // this.route.queryParamMap.subscribe(i => {
    //   this.employees.id = {...i.keys, ...i};
    // });

    this.employeeService.employee.forEach((e) => {
      console.log('if----con--------', e.id)

      if (this.editId === e.id) {
        this.employees = e;
        console.log('if----con----!!!!!!----', e)
      }
      //  this.employees = id;
      // this.employees.id=i.id;
      // this.employees.age=i.age;
      // this.employees.email=i.email;
    })
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    },

    );

    // this.cdr.detectChanges();
  }

  get f() { return this.registerForm.controls; }

  onClickMe() {


    console.log('employe --value--->>', this.registerForm.value)

    this.submitted = true;

    // stop here if form is invalid
    
      this.dataService.addEmployee(this.registerForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      },error=>{
        console.log('Error:',error);
      });










    // alert('SUCCESS!! :-)\n\n' + JSON.stringify
    // (this.registerForm.value))
    // this.employees = {} as any;
    // console.log("hi", this.registerForm.value)
    // //  this.reset();
    // //const test = employee
    // this.employeeService.employee.push(this.registerForm.value);
    //    this.registerForm.reset();
    // console.log('-------employeees-----', this.registerForm.value);
  }

  onClickUpdate(emp) {

    this.employeeService.employee[this.employees.id];


    console.log("ooo", emp)
  }


  // this.employeeService.getUpdate(em.id)
  // .subscribe(updatedItem => {
  //   item = updatedItem;
  // });





}
