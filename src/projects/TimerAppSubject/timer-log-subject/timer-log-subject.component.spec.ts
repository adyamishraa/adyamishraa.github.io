import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogSubjectComponent } from './timer-log-subject.component';

describe('TimerLogSubjectComponent', () => {
  let component: TimerLogSubjectComponent;
  let fixture: ComponentFixture<TimerLogSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLogSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
