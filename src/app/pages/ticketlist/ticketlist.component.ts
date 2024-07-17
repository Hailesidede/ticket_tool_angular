import { Component } from '@angular/core';

@Component({
  selector: 'app-ticketlist',
  standalone: true,
  imports: [],
  templateUrl: './ticketlist.component.html',
  styleUrl: './ticketlist.component.css'
})
export class TicketlistComponent {

  mode : string ='MY TICKETS';
  ticketList : any[]= [];


  changeMode(tab : string){
    this.mode = tab;
    if(this.mode == "MY TICKETS"){

    }

  }

}
