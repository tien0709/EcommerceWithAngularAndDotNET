import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFadeinComponent } from './card-fadein.component';

describe('CardFadeinComponent', () => {
  let component: CardFadeinComponent;
  let fixture: ComponentFixture<CardFadeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFadeinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFadeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
