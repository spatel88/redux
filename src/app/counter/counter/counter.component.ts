import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  i:number = 0; 

  constructor() { 
      this.i++;
      console.log("constructor "+this.i);
  }

  ngOnInit(): void {
    this.i++;
    console.log("on init "+this.i);
  }

  ngOnChanges(element: SimpleChanges) {
    this.i++;
    console.log(element);
    console.log("on changes "+this.i);
  }

}
