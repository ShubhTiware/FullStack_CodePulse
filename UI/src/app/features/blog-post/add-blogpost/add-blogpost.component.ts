import { Component } from '@angular/core';
import { AddBlogPost } from '../modals/add-blog-post.modal';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  modal: AddBlogPost;

  constructor() {
    this.modal = {
      title: '',
      shortDescription: '',
      content: '',
      featureImageUrl: '',
      urlHandle: '',
      author: '',
      publishedDate: new Date(),
      isVisible: true
    }  
  }

  OnFormSubmit(): void {
    console.log(this.modal)
  }
}
