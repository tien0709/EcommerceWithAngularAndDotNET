import { Component } from '@angular/core';
import { Icontact } from '../../../data/models/IContact';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contact: Icontact[] =[];
    constructor(private publicService: PublicService) { }

    ngOnInit(): void {
        this.publicService.getContact().subscribe((response: Icontact[]) => {
            this.contact = response;
        })
    }




}
