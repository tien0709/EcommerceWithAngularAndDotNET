import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactManagementComponent } from './edit-contact-management.component';

describe('EditContactManagementComponent', () => {
  let component: EditContactManagementComponent;
  let fixture: ComponentFixture<EditContactManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditContactManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContactManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
