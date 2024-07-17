import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  
  ngOnInit(): void {
   this.getAllEmployees();
  }

  isNewEmployee: boolean = false;


  employee : Employee= {
    employeeId: 0,
    employeeName: '',
    employeeDepartment: '',
    employeeEmail: '',
    role: '',
    createdDate: ''
  }

  roleList : string[]=[
    "Admin","dataManager","salesmanager",'finance'
  ] 

  departmentList : string[]=[
    'marketing','IT','Risk','legal','operations','Information Security'
  ]


  employeeList :Employee[]=[
    {employeeId:1, employeeName: "kushwaha", employeeDepartment:"supplyChain",employeeEmail:"kushwaha@gmail.com",role:"chainManager",createdDate:"02-11-2022"},
    {employeeId:2, employeeName: "Chitoh", employeeDepartment:"Legal",employeeEmail:"maliSafi@gmail.com",role:"Lawyer",createdDate:"11-01-2023"},
    {employeeId:3, employeeName: "Buumba", employeeDepartment:"IT",employeeEmail:"bumbaa@gmail.com",role:"developer",createdDate:"02-12-2022"},
    {employeeId:4, employeeName: "Stevoh", employeeDepartment:"maintenance",employeeEmail:"steve@gmail.com",role:"cleaner",createdDate:"03-11-2022"}
  ]

  getAllEmployees(){
    return this.employeeList;
  }

  editEmployee(data : any){

  }


  ondelete(data: any){

  }

  saveEmployee(){
    let newEmp : Employee = {
      employeeId: this.employeeList.length >0? this.employeeList[this.employeeList.length -1].employeeId+1:1,
      employeeName: this.employee.employeeName,
      employeeDepartment: this.employee.employeeDepartment,
      employeeEmail: this.employee.employeeEmail,
      role: this.employee.role,
      createdDate: new Date(this.employee.createdDate).toLocaleDateString()
    }

    alert("employee saved Successfully");
    this.employeeList.push(newEmp);
  
    this.getAllEmployees();
    this.isNewEmployee= true;

  }

  updateEmployee(){

  }

  addNewEmployee(){
    this.isNewEmployee = true;
  }

}
