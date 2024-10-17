import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactManagementComponent } from './add-contact-management.component';

describe('AddContactManagementComponent', () => {
  let component: AddContactManagementComponent;
  let fixture: ComponentFixture<AddContactManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContactManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
