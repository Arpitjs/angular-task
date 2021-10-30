import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: any = []
  constructor(
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.getProductsData()
  }
  getProductsData() {
    this.apiService.GetProductData()
    .subscribe((response: any) => this.products = response, err => console.log(err))
  }
}
