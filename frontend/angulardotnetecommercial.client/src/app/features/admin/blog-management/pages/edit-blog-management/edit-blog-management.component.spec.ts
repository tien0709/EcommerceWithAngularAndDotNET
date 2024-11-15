import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogManagementComponent } from './edit-blog-management.component';

describe('EditBlogManagementComponent', () => {
  let component: EditBlogManagementComponent;
  let fixture: ComponentFixture<EditBlogManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBlogManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
