import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexManagementContactComponent } from './index-management-contact.component';

describe('IndexManagementContactComponent', () => {
  let component: IndexManagementContactComponent;
  let fixture: ComponentFixture<IndexManagementContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexManagementContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexManagementContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
