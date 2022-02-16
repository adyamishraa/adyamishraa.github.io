import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMaintenanceComponent } from './state-maintenance.component';

describe('StateMaintenanceComponent', () => {
  let component: StateMaintenanceComponent;
  let fixture: ComponentFixture<StateMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
