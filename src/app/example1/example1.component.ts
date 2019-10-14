import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  boxitem:boolean = true;
  strval:string = "The content changed";
  strval1:string = "This is box two";
  stylebx = { 
    marginTop:'30px'
    }

    clsbind = {
      boxs1:true,
    }

    clsbind2 = {
      boxs2:true,
    }

     chngstyle = {
       fsize:false
     }
    

  constructor() { }

  ngOnInit() {}

  getData() {
    this.boxitem = false;
    this.clsbind2.boxs2 = false;
    this.chngstyle.fsize = true;
    this.strval1 = this.strval;
  }

}