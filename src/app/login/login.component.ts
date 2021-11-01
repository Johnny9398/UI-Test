import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { __assign } from 'tslib';
import { signin } from './modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signin: signin;
  signins: signin[];

  constructor(private router: Router) {
    this.signin = new signin();
    this.signins = [];


  }

  ngOnInit(): void {

  }
  addmember(form: NgForm) {
    this.signins.push(__assign({}, this.signin));
    console.log(this.signins);
    alert("User Signed");
    form.resetForm();

  }
  login() {
    localStorage.clear;

    this.router.navigate(['/layout']);
  }

}
