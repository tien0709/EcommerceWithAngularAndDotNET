import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBlogManagementComponent } from './index-blog-management.component';

describe('IndexBlogManagementComponent', () => {
  let component: IndexBlogManagementComponent;
  let fixture: ComponentFixture<IndexBlogManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexBlogManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBlogManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
