import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nameChange, customIncrement } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { getChannelName } from '../state/counter.selector';

@Component({
  selector: 'app-cutom-counter-input',
  templateUrl: './cutom-counter-input.component.html',
  styleUrls: ['./cutom-counter-input.component.css']
})
export class CutomCounterInputComponent implements OnInit {

  value: number = 0;
  nameOfChannel: Observable<string> | undefined ;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.nameOfChannel = this.store.select(getChannelName);    
  }

  onAdd(){
    this.store.dispatch(customIncrement({ count: +this.value }));
    this.value = 0;
  }

  changeName(){
    this.store.dispatch(nameChange());
  }
}
