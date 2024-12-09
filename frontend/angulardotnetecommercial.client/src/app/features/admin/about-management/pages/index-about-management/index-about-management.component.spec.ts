import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAboutManagementComponent } from './index-about-management.component';

describe('IndexAboutManagementComponent', () => {
  let component: IndexAboutManagementComponent;
  let fixture: ComponentFixture<IndexAboutManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexAboutManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexAboutManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
