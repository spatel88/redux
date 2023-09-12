import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomCounterInputComponent } from './cutom-counter-input.component';

describe('CutomCounterInputComponent', () => {
  let component: CutomCounterInputComponent;
  let fixture: ComponentFixture<CutomCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomCounterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
