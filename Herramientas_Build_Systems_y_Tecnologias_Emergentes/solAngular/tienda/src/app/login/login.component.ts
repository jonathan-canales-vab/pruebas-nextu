import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string; //Variable error de tipo srting
  email : string;
  password: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.email = " ";
    this.password = " ";
  }

  checkLogin(form){
    console.log(form.controls.email.value);
    console.log(form.controls.password.value);
    //console.log(form);

    this.router.navigate(['home']);
  }
}
