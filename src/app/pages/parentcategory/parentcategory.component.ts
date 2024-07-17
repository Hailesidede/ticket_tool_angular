import { Component, inject } from '@angular/core';
import { Department } from '../department/department';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { Category } from './category';

@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.css'
})
export class ParentcategoryComponent {

  masterService = inject(MasterService);
  
  categoryList : Category[]=[
    {categoryName:"Jumbo", deptId:1, createdDate:"2-11-2024",departmentName:'Risk and compliance'},
    {categoryName:"Neyous", deptId:2, createdDate:"12-12-2024",departmentName:'IT'},
    {categoryName:"ferocious", deptId:3, createdDate:"17-9-2023",departmentName:'Executive'},
    {categoryName:"Linka", deptId:4, createdDate:"15-09-2011",departmentName:'Legal'},
    {categoryName:"Medios", deptId:5, createdDate:"11-11-2019",departmentName:'Governance'},
    {categoryName:"palmer", deptId:6, createdDate:"07-12-2015",departmentName:'QA'}
  ]

// created an initialization for the department
  categoryObj : any={
    "categoryName":"",
    "deptId":0,
    "createdDate":"",
    "departmentName":""

  }
  
  
  ngOnInit(): void {
    this.getAllCategoryt();
   
  }

  getAllCategoryt(){

    return this.categoryList;
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

saveCategory(){
  console.log(this.categoryObj);

  // const rawDate = this.departObj.createdDate;
  // if(!rawDate || isNaN(Date.parse(rawDate))){
  //   alert("Please insert a valid date")
  //   return;
  // }

  // const formattedDate = this.formatDater(new Date(rawDate));
 
  let newCategory : Category={
    categoryName:this.categoryObj.categoryName ,
    deptId: this.categoryObj.deptId,
    createdDate: this.categoryObj.createdDate,
    departmentName: this.categoryObj.departmentName
  }

  this.categoryList.push(newCategory);
  alert("Category Created successfully");
  this.getAllCategoryt();
}


editDepart(data :any){
  
  return data;




 
  

}

updateDepart(){

  
  alert("Category updated successfully")
  this.categoryObj = {

  }

}


ondelete(id : any){
 const isDelete = confirm("Are you sure you want to delete");
}


}
