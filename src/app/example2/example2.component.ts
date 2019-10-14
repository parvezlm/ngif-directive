import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  data:any;
  show:boolean = true;
  mulclass = {
    warn:true,
    succ:false
  }
  constructor() { }

  ngOnInit() {
  }

  showData(inptbx) {
     this.show = false;
     this.mulclass.succ = true;
    if(inptbx.value == '') {
      this.show = true;
      this.mulclass.warn = true;
      this.mulclass.succ = false;
      return false;
    }  
  }
}