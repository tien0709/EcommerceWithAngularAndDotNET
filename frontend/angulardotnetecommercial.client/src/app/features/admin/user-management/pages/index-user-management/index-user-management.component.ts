import { Component } from '@angular/core';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Iuser } from '../../../../../data/models/IUser';

@Component({
  selector: 'app-index-user-management',
  templateUrl: './index-user-management.component.html',
  styleUrl: './index-user-management.component.css'
})
export class IndexUserManagementComponent {
    users: Iuser[] = [];
    //message$ = this.messageService.message$;
    constructor(private publicService: PublicService, /*private messageService: MessageService*/) { }

    ngOnInit(): void {
        this.publicService.getUser().subscribe((response: Iuser[]) => {
            this.users = response;
            console.log(this.users)
        })
    }
}
