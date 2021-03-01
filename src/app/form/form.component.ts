import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkButton()
  {
    alert('Button is clicked');
  }

  contentValue='Harsh';
  imgurl="../../assets/angular.jpeg";



  getValue()
  {
      console.log(this.contentValue);
  }

}
