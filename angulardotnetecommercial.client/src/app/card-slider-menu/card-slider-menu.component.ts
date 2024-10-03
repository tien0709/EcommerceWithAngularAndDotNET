import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider-menu',
  templateUrl: './card-slider-menu.component.html',
  styleUrl: './card-slider-menu.component.css'
})
export class CardSliderMenuComponent {
    @Input() name: string = ""
    @Input() description: string = ""
    @Input() price: string = ""
    @Input() srcImg: string = ""
    //button = 
}
