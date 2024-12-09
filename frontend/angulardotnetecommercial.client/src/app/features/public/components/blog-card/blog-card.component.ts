import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { Iblog } from '../../../../data/models/IBlog';

@Component({
    selector: 'app-blog-card',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
    @Input() title: string = ""
    @Input() time: string = ""
    @Input() body: string = ""
    @Input() srcImg: string = ""
}