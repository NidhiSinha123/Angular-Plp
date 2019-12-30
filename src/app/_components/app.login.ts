import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthenticationService } from "../_service/app.AuthenticationService";

@Component({
  selector: 'login',
  templateUrl: '../_html/app.login.html'
})

export class LoginComponent implements OnInit {
  useremail :any;
  password :any;
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.useremail=="medha@gmail.com" && this.password=="Medha@123" ) 
    {
      this.router.navigate(['/adminhome'])
      this.invalidLogin = false
    } else
      
    this.router.navigate(['/userhome'])
    this.invalidLogin = false
  }
}