import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model'; 

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user : any;
  @Input('user') userObj  : User | undefined;
  
  isCollapsed : boolean = true; 
  
  toggleIsCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.user = {
      name : this.userObj?.name,
      title: this.userObj?.designation,
      address: this.userObj?.address,
      Phone: this.userObj?.phone,
      color: this.userObj?.color
    };
  }


}
