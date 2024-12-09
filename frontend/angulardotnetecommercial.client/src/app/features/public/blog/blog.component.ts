import { Component } from '@angular/core';
import { Iblog } from '../../../data/models/IBlog';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    blogs: Iblog[] = [];

    constructor(private publicService: PublicService) { }

    ngOnInit(): void {
        this.publicService.getBlogs().subscribe((response: Iblog[]) => {
            this.blogs = response;
        });
    }
}
