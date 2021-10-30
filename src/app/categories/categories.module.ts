import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from '../services/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoriesComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    TopNavComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [APIService]
})
export class CategoriesModule { }
