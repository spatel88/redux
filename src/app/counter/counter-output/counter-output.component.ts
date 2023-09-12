import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {  

  counter: Observable<number> | undefined;

  constructor(private store:Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    console.log("constructor call from channel output");
    this.counter = this.store.select(getCounter);
  }

}
