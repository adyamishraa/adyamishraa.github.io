import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceCategoryComponent } from './e-commerce-category.component';

describe('ECommerceCategoryComponent', () => {
  let component: ECommerceCategoryComponent;
  let fixture: ComponentFixture<ECommerceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
