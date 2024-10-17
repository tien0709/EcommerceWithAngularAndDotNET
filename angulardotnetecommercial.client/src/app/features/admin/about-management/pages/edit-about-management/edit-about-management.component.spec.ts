import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutManagementComponent } from './edit-about-management.component';

describe('EditAboutManagementComponent', () => {
  let component: EditAboutManagementComponent;
  let fixture: ComponentFixture<EditAboutManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAboutManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAboutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
