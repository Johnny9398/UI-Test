import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { feedback } from './modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  feed: feedback;

  constructor() {
    this.feed = new feedback();
  }

  ngOnInit(): void {
  }

  addmessage(form: NgForm) {
    alert("added");
    form.resetForm();

  }

}
