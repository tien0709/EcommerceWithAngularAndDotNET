import { Component } from '@angular/core';
import { Iblog } from '../../../../../data/models/IBlog';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-blog-management',
  templateUrl: './add-blog-management.component.html',
  styleUrl: './add-blog-management.component.css'
})
export class AddBlogManagementComponent {
    id: string | null = null;
    blog: Iblog | null = null;
    image: File | null = null;
    sourceImage: string = '';
    title: string = '';
    body: string = '';
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit(): void {
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
                const newBlog = {
                    title: this.title,
                    body: this.body,
                    sourceImage: this.sourceImage,
                    id: this.id
                };

                this.publicService.addBlog(newBlog).subscribe(response => {
                    this.messageService.showMessage('Thêm thành công');
                    this.router.navigate(['/admin/blogs']);
                }, error => {
                    console.log(error);
                    this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
                });
        } else {
            this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
        }
    }

}
