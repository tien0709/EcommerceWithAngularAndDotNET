import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperParallaxComponent } from './shipper-parallax.component';

describe('ShipperParallaxComponent', () => {
  let component: ShipperParallaxComponent;
  let fixture: ComponentFixture<ShipperParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipperParallaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
