import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newticket.component.html',
  styleUrl: './newticket.component.css'
})
export class NewticketComponent {

  departmentList : string[]=[
    'marketing','IT','Risk','legal','operations','Information Security'
  ]

  parentCategoryList: string[]=[
    ' Software Installations','Hardware','wifi setup','Desk repair','Permissions and access','Support','Emergency toolkits'
  ]

  childCategory: string[]=[
    ' suport','kinkiy','wifi passowrd',' repair',' access','Support',' toolkits'
  ]

  oncreateTicket(){
    alert("Ticket created successfully")
  }


}
