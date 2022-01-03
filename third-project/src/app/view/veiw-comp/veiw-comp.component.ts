import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view',
  templateUrl: './veiw-comp.component.html',
  styleUrls: ['./veiw-comp.component.css']
})
export class VeiwCompComponent implements OnInit {

  userName: string | undefined;
  response:any;

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {

    
  }

  seach(){
    this.http.get("https://api.github.com/users/" + this.userName)
    .subscribe( (response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}