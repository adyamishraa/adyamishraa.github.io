import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseCountSubjectComponent } from './start-pause-count-subject.component';

describe('StartPauseCountSubjectComponent', () => {
  let component: StartPauseCountSubjectComponent;
  let fixture: ComponentFixture<StartPauseCountSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseCountSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseCountSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
