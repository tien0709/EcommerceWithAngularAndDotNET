import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSliderMenuComponent } from './card-slider-menu.component';

describe('CardSliderMenuComponent', () => {
  let component: CardSliderMenuComponent;
  let fixture: ComponentFixture<CardSliderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSliderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSliderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
