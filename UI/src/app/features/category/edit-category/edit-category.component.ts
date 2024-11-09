import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../modals/category.modal';
import { UpdateCategoryRequest } from '../modals/update-category-request.modals';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSubscription?: Subscription;
  editCategorySubscription?: Subscription;
  category?: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router){

  }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({next:(param) => {
      this.id = param.get('id');

      if(this.id){
        //get the data from the API
        this.categoryService.getCategoryById(this.id)
        .subscribe({
          next: (response) => {
            this.category = response;
          }
        });
      }
    }});
  }


  onFormSubmit(): void{
    const updateCategoruReq: UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      urlHandle: this.category?.urlHandle ?? ''
    }
    //pass the object to service
    if(this.id){
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoruReq)
      .subscribe({
        next: (respose) => {
          this.router.navigateByUrl('admin/categories');
        }
      });
    }  
  }

  onDelete(): void{
    if(this.id){
      this.categoryService.deleteCategory(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('admin/categories');
        }
      })
    }   
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }
}
