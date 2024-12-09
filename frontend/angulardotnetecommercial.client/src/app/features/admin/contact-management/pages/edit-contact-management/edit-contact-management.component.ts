import { Component } from '@angular/core';
import { Icontact } from '../../../../../data/models/IContact';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact-management',
  templateUrl: './edit-contact-management.component.html',
  styleUrl: './edit-contact-management.component.css'
})
export class EditContactManagementComponent {
    contact: Icontact[] = [];
    timeline: string = '';
    address: string = '';
    phoneNumber: string = '';
    emailCustomerSupport: string = '';
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Fetch data từ API và gán giá trị cho các biến
        this.publicService.getContact().subscribe((response: Icontact[]) => {
            this.contact = response;

            // Gán giá trị từ response về các thuộc tính về giới thiệu, slogan, sự nghiệp, cộng tác
            if (this.contact.length > 0) {
                this.address = this.contact[0].address;
                this.timeline = this.contact[0].timeline;
                this.emailCustomerSupport = this.contact[0].emailCustomerSupport;
                this.phoneNumber = this.contact[0].phoneNumber;
            }
        }, error => {
            this.errorMessage = 'Không thể tải dữ liệu từ server.';
        });
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
            const updatedContact = {
                timeline: this.timeline,
                address: this.address,
                phoneNumber: this.phoneNumber,
                emailCustomerSupport: this.emailCustomerSupport
            };

            this.publicService.updateContact(updatedContact).subscribe(response => {
                this.messageService.showMessage('Cập nhật thành công');
                this.router.navigate(['/admin/contact']);
            }, error => {
                console.log(error);
                this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
            });
        } else {
            this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
        }
    }
}
