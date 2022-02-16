import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSortingComponent } from './student-sorting.component';

describe('StudentSortingComponent', () => {
  let component: StudentSortingComponent;
  let fixture: ComponentFixture<StudentSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
