import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees:any

  constructor(private employeeService:EmployeeService,private Activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
   
   this.employees=this.employeeService.employee 
   this.employees.forEach(employee => {
    console.log("wel",employee);
  });

  }

  EditItem(i) {  
    
    this.router.navigate(['/add-emp'], { queryParams: { employees: i.id } });
    console.log("ii",i)

  } 

addEmployee(): void {
  this.router.navigate(['add-product']);
}

  DeleteItem(i){  
    console.log('iidetete--->>>', i.id);

    this.employees.forEach(data => {

      const deleteId =data.id
      if(i.id === deleteId){
        console.log('i am delete--->>',i)
        this.employees.splice(this.employees.indexOf(data),1);
      }
    });


    
    //console.log("aaaaaaaa",i)
   
  


}
// const remove = (index) => {
//   // console.log("============",index)
//   console.log("============B",rows)
//   rows.splice(index,1)
// // console.log("==================",rows.splice(index,1))
// //rows.splice(index,1)
// console.log("============A",rows)
// setRows([...rows])

// }
// const [rows, setRows] = useState([1]);
// var count=0
// const setMethod = (event) => {
//   count++
//   console.log("====", count)
//   //  let array=rows
//   setRows([...rows, rows.length+1])
}