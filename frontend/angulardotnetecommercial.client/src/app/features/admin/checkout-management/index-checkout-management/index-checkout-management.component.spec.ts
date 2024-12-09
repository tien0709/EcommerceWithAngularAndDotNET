import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCheckoutManagementComponent } from './index-checkout-management.component';

describe('IndexCheckoutManagementComponent', () => {
  let component: IndexCheckoutManagementComponent;
  let fixture: ComponentFixture<IndexCheckoutManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexCheckoutManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCheckoutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
