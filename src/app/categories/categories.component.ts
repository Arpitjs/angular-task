import {
  Component, OnInit
} from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  names = []
  page = 1
  categories: any = []
  nextProducts = []
  searchText = ''
  constructor(
    private apiService: APIService
  ) { }

  ngOnInit() {
    this.getProductsData()
  }

  getProductsData() {
    this.apiService.GetProductData()
      .subscribe((response: any) => {
        this.categories = response.slice(0, 4)
        this.names = response.map((product: any) => product.title)
      },
        err => console.log(err))
  }

  onScroll() {
    // console.log('SCROLLED') 
    // console.log(this.page)
    this.page++
      this.apiService.GetProductData()
        .subscribe((response: any) => {
          this.nextProducts = response.slice(this.page * 4 - 4, this.page * 4)
          this.categories = [...this.categories, ...this.nextProducts]
        },
          err => console.log(err))
  }
}

