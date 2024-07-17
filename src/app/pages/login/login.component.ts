import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  masterService = inject(MasterService);
  router = inject(Router);

  loginObj : any ={
    "emailId":"",
    "password":""
  }


  onLogin(){
   console.log(this.loginObj);
    this.router.navigateByUrl('dashboard');

  }

}
