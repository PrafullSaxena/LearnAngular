import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  testService : TestService | undefined;

  constructor(svc : TestService, private http : HttpClient){

    svc.printToConsole();

  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/PrafullSaxena');
    
    obs.subscribe( (response) => console.log(response));
  }

}
