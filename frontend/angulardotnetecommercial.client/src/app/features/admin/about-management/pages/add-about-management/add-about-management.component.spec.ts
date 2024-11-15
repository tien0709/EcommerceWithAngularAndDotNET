import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAboutManagementComponent } from './add-about-management.component';

describe('AddAboutManagementComponent', () => {
  let component: AddAboutManagementComponent;
  let fixture: ComponentFixture<AddAboutManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAboutManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAboutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
