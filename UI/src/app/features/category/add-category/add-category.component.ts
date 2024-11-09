import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../modals/add-category-request.modals';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  modal : AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService, private router: Router){
    this.modal = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit(){
    this.addCategorySubscription = this.categoryService.addCategory(this.modal)
    .subscribe({
      next: (response) => {
        // console.log("This was sucessful!");
        this.router.navigateByUrl('/admin/categories');
      }
    });
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
