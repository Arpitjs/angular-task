import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: any
  ratings = [1,2,3,4,5]

  constructor(
    private apiService: APIService,
    private activatedRoute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.getProductInfo()
  }

  getProductInfo() {
    this.apiService.GetOneProductData(this.activatedRoute.snapshot.params.id)
    .subscribe((response: any) => this.product = response, err => console.log(err))
  }
  
}
