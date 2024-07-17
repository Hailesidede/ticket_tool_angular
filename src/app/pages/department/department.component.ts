import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Department } from './department';
import { DatePipe, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  masterService = inject(MasterService);
  
  departmentList :Department[]=[
    {departmentId: 1, departmentName: 'IT',createdDate: '3-04-2019' },
    {departmentId: 2, departmentName: 'Business',createdDate:'7-08-2023'},
    {departmentId: 3, departmentName: 'Risk',createdDate:'15-11-2023'},
    {departmentId: 4, departmentName: 'Governance',createdDate:'12-10-2023'},
    {departmentId: 5, departmentName: 'Infosec',createdDate:'13-02-2023'}
    
  ];

// created an initialization for the department
  departObj: any={
    "departName":"",
    "createdDate":''
  }
  
  
  ngOnInit(): void {
    this.getAllDepartment();
   
  }

  getAllDepartment(){

    return this.departmentList;
  //   this.masterService.getAllDepartments().subscribe(
  //     (res: any)=>{
  //       this.departmentList = res.data;
  //       console.log(res.value)
  //     }
  //   );
  

}

 formatDater(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

saveDepart(){
  console.log(this.departObj);

  // const rawDate = this.departObj.createdDate;
  // if(!rawDate || isNaN(Date.parse(rawDate))){
  //   alert("Please insert a valid date")
  //   return;
  // }

  // const formattedDate = this.formatDater(new Date(rawDate));
 
  let newDept : Department={
    departmentId :this.departmentList.length >0 ? this.departmentList[this.departmentList.length -1].departmentId+1 :1,
    departmentName:this.departObj.departName,
    createdDate:new Date(this.departObj.createdDate).toLocaleDateString()
    
    // createdDate:formattedDate
  }

  this.departmentList.push(newDept);
  alert("Department Created successfully");
  this.getAllDepartment();
}


editDepart(data :any){
  let departName = data.departmentName;
  let date = data.createdDate;
  this.departObj = {
    "departName": departName,
    "createdDate":data.createdDate

  }
  return data;




  console.log(this.departObj)
  

}

updateDepart(){

  
  alert("department updated successfully")
  this.departObj = {
    "departName":"",
    "createdDate":''
  }

}


ondelete(id : any){
 const isDelete = confirm("Are you sure you want to delete");
}

}