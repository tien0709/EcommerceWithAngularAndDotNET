import { Component } from '@angular/core';
import { Iabout } from '../../../../../data/models/IAbout';
import { PublicService } from '../../../../public/services/public.service';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-about-management',
  templateUrl: './edit-about-management.component.html',
  styleUrl: './edit-about-management.component.css'
})
export class EditAboutManagementComponent {
    about: Iabout[] = [];
    aboutUs: string = '';
    feedback: string = '';
    colaboration: string = '';
    career: string = '';
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Fetch data từ API và gán giá trị cho các biến
        this.publicService.getAbout().subscribe((response: Iabout[]) => {
            this.about = response;

            // Gán giá trị từ response về các thuộc tính về giới thiệu, slogan, sự nghiệp, cộng tác
            if (this.about.length > 0) {
                this.aboutUs = this.about[0].aboutUs;
                this.feedback = this.about[0].feedback;
                this.colaboration = this.about[0].colaboration;
                this.career = this.about[0].career;
            }
        }, error => {
            this.errorMessage = 'Không thể tải dữ liệu từ server.';
        });
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
            const updatedAbout = {
                aboutUs: this.aboutUs,
                feedback: this.feedback,
                colaboration: this.colaboration,
                career: this.career
            };

            this.publicService.updateAbout(updatedAbout).subscribe(response => {
                this.messageService.showMessage('Cập nhật thành công');
                this.router.navigate(['/admin/about']);
            }, error => {
                console.log(error);
                this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
            });
        } else {
            this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
        }
    }
}
