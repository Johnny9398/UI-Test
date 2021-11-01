import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __assign } from 'tslib';
import { signin } from './modal';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signin: signin;
  signins: signin[];

  constructor() {
    this.signin = new signin();
    this.signins = [];


  }

  ngOnInit(): void {

  }
  addmember(form: NgForm) {
    this.signins.push(__assign({}, this.signin));
    console.log(this.signins);
    alert("Member Added");
    form.resetForm();

  }

}
