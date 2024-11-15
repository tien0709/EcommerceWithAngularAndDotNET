import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserManagementComponent } from './add-user-management.component';

describe('AddUserManagementComponent', () => {
  let component: AddUserManagementComponent;
  let fixture: ComponentFixture<AddUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
