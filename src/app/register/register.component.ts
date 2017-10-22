import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  styles:[`input.ng-invalid{border-left:5px solid red; }
  input.ng-valid{border-left:5px solid green;}`],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
