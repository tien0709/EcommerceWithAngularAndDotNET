import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductManagementComponent } from './index-product-management.component';

describe('IndexProductManagementComponent', () => {
  let component: IndexProductManagementComponent;
  let fixture: ComponentFixture<IndexProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexProductManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
