import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  name: String = "jjj";
  phone: String = "";
  email: String = "";
  show = false;

  ngOnInit() {
  }


  submitHandler(event){
    event.preventDefault();
    this.show = true;
  }

}
