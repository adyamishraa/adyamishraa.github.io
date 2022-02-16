import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMaintenanceSubjectComponent } from './state-maintenance-subject.component';

describe('StateMaintenanceSubjectComponent', () => {
  let component: StateMaintenanceSubjectComponent;
  let fixture: ComponentFixture<StateMaintenanceSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateMaintenanceSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMaintenanceSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
