import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutManagementComponent } from './checkout-management.component';

describe('CheckoutManagementComponent', () => {
  let component: CheckoutManagementComponent;
  let fixture: ComponentFixture<CheckoutManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
