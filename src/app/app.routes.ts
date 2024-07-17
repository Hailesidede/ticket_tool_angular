import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { Component } from '@angular/core';
import { ParentcategoryComponent } from './pages/parentcategory/parentcategory.component';
import { NewticketComponent } from './pages/newticket/newticket.component';
import { TicketlistComponent } from './pages/ticketlist/ticketlist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'department',
                component:DepartmentComponent
            },
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'parent-category',
                component:ParentcategoryComponent
            },
            {
                path:'new-ticket',
                component:NewticketComponent
            },
            {
                path:'tickets-list',
                component:TicketlistComponent
            }
        ]
    }
];
