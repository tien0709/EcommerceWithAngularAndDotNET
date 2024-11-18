import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarManagementComponent } from './nav-bar-management.component';

describe('NavBarManagementComponent', () => {
  let component: NavBarManagementComponent;
  let fixture: ComponentFixture<NavBarManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
