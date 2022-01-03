import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'date',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.css']
})
export class DateComponentComponent implements OnInit {

  dateMassage : string | undefined;

  message : string = 'Hello bro!!';  

  constructor() {

    setInterval( () => {
      let currentDate = new Date();
      this.dateMassage = currentDate.toDateString() + '' + currentDate.toLocaleTimeString();
    } , 1000);

  }

  ngOnInit(): void {
  }

  add(number1 : number, number2 : number) {
    return number1 + number2;
  }

}
