import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUserManagementComponent } from './index-user-management.component';

describe('IndexUserManagementComponent', () => {
  let component: IndexUserManagementComponent;
  let fixture: ComponentFixture<IndexUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
