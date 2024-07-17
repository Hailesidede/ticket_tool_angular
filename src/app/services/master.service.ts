import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL : string ="http://localhost:8080"

  constructor(private http : HttpClient) { }


  login(obj : any){
    return this.http.post(this.apiURL+"Login",obj)
  }


  getAllDepartments(){
    return this.http.get(`${this.apiURL}/getDepartments`)
  }

  createNewDepartment(obj:any){
    return this.http.post(`${this.apiURL}/addNewDepartment`,obj)
  }

  updateDepartment(obj:any){
    return this.http.put(`${this.apiURL}/updateDepartment`,obj)
  }


  deleteDepartment(id : any){
    return this.http.delete(`${this.apiURL}/deleteDeptament?=${id}`)

  }
}
