import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent  {

 // showSucessMessage: boolean;


  clickMessage = '';


    onClickMe(f: NgForm) {
      //this.clickMessage = 'Successful';
      console.log(f.value.first);
      if ( !f.value.first ) {

        this.clickMessage = 'username can not be empty';
      }
      else{
      console.log(f.value.email);
      if
       ( !f.value.email ) {

        this.clickMessage = 'Email can not be empty';
      }
     else {
        if(!f.value.pwd){
          this.clickMessage = 'password can not be empty';
        }
        else{
          this.clickMessage = 'Successful';
        }

      }


  //this.showSucessMessage = true;
  //setTimeout(()=> this.showSucessMessage = false, 4000);
    }
  }
}