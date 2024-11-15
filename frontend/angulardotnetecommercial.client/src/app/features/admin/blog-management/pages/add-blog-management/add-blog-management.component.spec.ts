import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogManagementComponent } from './add-blog-management.component';

describe('AddBlogManagementComponent', () => {
  let component: AddBlogManagementComponent;
  let fixture: ComponentFixture<AddBlogManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBlogManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
