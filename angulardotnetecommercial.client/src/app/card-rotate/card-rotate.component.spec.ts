import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRotateComponent } from './card-rotate.component';

describe('CardRotateComponent', () => {
    let component: CardRotateComponent;
    let fixture: ComponentFixture<CardRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [CardRotateComponent]
    })
    .compileComponents();

      fixture = TestBed.createComponent(CardRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
