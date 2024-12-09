import { Component } from '@angular/core';
import { Iabout } from '../../../../../data/models/IAbout';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';

@Component({
  selector: 'app-index-about-management',
  templateUrl: './index-about-management.component.html',
  styleUrl: './index-about-management.component.css'
})
export class IndexAboutManagementComponent {
    about: Iabout[] = [];
    message$ = this.messageService.message$;
    constructor(private publicService: PublicService, private messageService: MessageService,) { }

    ngOnInit(): void {
        this.publicService.getAbout().subscribe((response: Iabout[]) => {
            this.about = response;
        })
    }
}
