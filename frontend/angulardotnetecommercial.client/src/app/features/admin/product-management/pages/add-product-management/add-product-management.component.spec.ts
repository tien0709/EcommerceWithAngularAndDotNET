import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductManagementComponent } from './add-product-management.component';

describe('AddProductManagementComponent', () => {
  let component: AddProductManagementComponent;
  let fixture: ComponentFixture<AddProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
