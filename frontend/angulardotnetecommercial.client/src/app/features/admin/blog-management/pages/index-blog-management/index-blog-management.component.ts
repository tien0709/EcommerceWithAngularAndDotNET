import { Component } from '@angular/core';
import { Iblog } from '../../../../../data/models/IBlog';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-blog-management',
  templateUrl: './index-blog-management.component.html',
  styleUrl: './index-blog-management.component.css'
})
export class IndexBlogManagementComponent {
    blogs: Iblog[] = [];
    message$ = this.messageService.message$;
    errorMessage: string = "";
    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router,
    ) {}
    ngOnInit(): void {
        // Fetch data từ API và gán giá trị cho các biến
        this.publicService.getBlogs().subscribe((response: Iblog[]) => {
            this.blogs = response;
        }, error => {
            this.errorMessage = 'Không thể tải dữ liệu từ server.';
        });
    }

    deleteBlog(blogId: string): void {
        this.publicService.deleteBlog(blogId).subscribe((response: any) => {
            this.messageService.showMessage('xóa thành công');
        }, error => {
            this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
        });
        //reload page
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
}
