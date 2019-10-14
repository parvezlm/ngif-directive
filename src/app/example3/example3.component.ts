import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  employees =[];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(empdata:any) {
    this.employees = [
      {
      fname:empdata.fname,
      lname:empdata.lname,
      email:empdata.email,
      phone:empdata.phone
     }
    ];

    // this.employees = empdata.fname;
    // this.employees = empdata.lname;
    // this.employees = empdata.email;
    // this.employees = empdata.phone;
    // console.log(this.employees = empdata.fname);
  }

}