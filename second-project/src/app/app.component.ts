import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  inputText: string = "Initial Value";

  user : User | undefined;

  constructor(){ 

    this.user = new User();

    this.user.name='Prafull';
    this.user.designation = 'Software Developer';
    this.user.address='Near mahia d college jila prishad banda';
    this.user.phone = [
      '123-456-789',
      '456-456-456'
    ];
    this.user.color = [
      'Yellow',
      'Green',
      'Blue'
    ]
  }

}
