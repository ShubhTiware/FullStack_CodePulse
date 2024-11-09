import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../modals/add-category-request.modals';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../modals/category.modal';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../modals/update-category-request.modals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(modal : AddCategoryRequest): Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Catagorys`,modal);
  }

  getAllCategories(): Observable<Category[]>
  {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Catagorys`);
  }

  getCategoryById(id: string): Observable<Category> {
    //return this.http.get<Category>(`${environment.apiBaseUrl}/api/Catagorys/${id}'); 
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/Catagorys/${id}`);
  }

  updateCategory(id: string, updateCategoruReq: UpdateCategoryRequest): Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/Catagorys/${id}`,updateCategoruReq);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Catagorys/${id}`);
  }
}
