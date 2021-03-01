import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  // model={
  //   username:'',
  //   email:'',
  //   password:'',
  //   cpassword:'',
  //   location:'',
  //   terms:false
  // }

  model:any=[];
  ngOnInit(): void {
  }

  onSubmit(f:NgForm)
  {
      console.log(f.value);
  }

}
