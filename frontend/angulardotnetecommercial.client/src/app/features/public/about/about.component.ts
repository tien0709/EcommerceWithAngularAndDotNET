import { Component } from '@angular/core';
import { Iabout } from '../../../data/models/IAbout';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    about: Iabout[] = [];
    constructor(private publicService: PublicService) { }

    ngOnInit(): void {
        this.publicService.getAbout().subscribe((response: Iabout[]) => {
            this.about = response;
        })
    }
}
