import { Component } from '@angular/core';
import { Iblog } from '../../../../../data/models/IBlog';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-blog-management',
  templateUrl: './edit-blog-management.component.html',
  styleUrl: './edit-blog-management.component.css'
})
export class EditBlogManagementComponent {
    id: string | null = null;
    blog: Iblog| null  = null;
    sourceImage: string = '';
    title: string = '';
    body: string = '';
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); // Lấy giá trị của tham số 'id'
        });
    }

    ngOnInit(): void {
        // Fetch data từ API và gán giá trị cho các biến
        this.publicService.getBlog(this.id!).subscribe((response: Iblog) => {
            this.blog = response;

            if (this.blog != null) {
                this.title = this.blog.title;
                this.body = this.blog.body;
                this.id = this.blog.id;
                this.sourceImage = this.blog.sourceImage;
            }
        }, error => {
            this.errorMessage = 'Không thể tải dữ liệu từ server.';
        });
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
            const updatedBlog = {
                title: this.title,
                body: this.body,
                sourceImage: this.sourceImage,
                id: this.id
            };

            this.publicService.updateBlog(updatedBlog).subscribe(response => {
                this.messageService.showMessage('Cập nhật thành công');
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
