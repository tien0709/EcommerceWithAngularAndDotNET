import { Component } from '@angular/core';
import { Icontact } from '../../../../../data/models/IContact';
import { MessageService } from '../../../../../core/services/message.service';
import { PublicService } from '../../../../public/services/public.service';

@Component({
  selector: 'app-index-management-contact',
  templateUrl: './index-management-contact.component.html',
  styleUrl: './index-management-contact.component.css'
})
export class IndexManagementContactComponent {
    contact: Icontact[] = [];
    message$ = this.messageService.message$;
    constructor(private publicService: PublicService, private messageService: MessageService,) { }

    ngOnInit(): void {
        this.publicService.getContact().subscribe((response: Icontact[]) => {
            this.contact = response;
        })
    }
}
