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
  isBottom = false
  names = []
  // page = 0
  categories: any = []
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
    // this.page  = this.page + 4
    this.apiService.GetProductData()
      .subscribe((response: any) => {
        this.categories = response
        this.isBottom = true
      },
        err => console.log(err))
  }
}

