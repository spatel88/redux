import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nameChange, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-cutom-counter-input',
  templateUrl: './cutom-counter-input.component.html',
  styleUrls: ['./cutom-counter-input.component.css']
})
export class CutomCounterInputComponent implements OnInit {

  value: number = 0;
  nameOfChannel: string | undefined ;

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) =>{
        console.log('Channel Name Observable called');
        this.nameOfChannel = data.channelName;
    });
  }

  onAdd(){
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  changeName(){
    this.store.dispatch(nameChange());
  }
}
