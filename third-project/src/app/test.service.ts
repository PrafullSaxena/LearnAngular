import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToConsole(){
    console.log("Test Service Component");
  }

}
