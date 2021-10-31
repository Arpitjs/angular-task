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
import { CategoryRoutingModule } from './categories.routing';
import { SearchPipe } from '../services/search.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    CategoriesComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    TopNavComponent,
    ProductsComponent,
    SearchPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CategoryRoutingModule,
    InfiniteScrollModule
  ],
  providers: [APIService]
})
export class CategoriesModule { }

platformBrowserDynamic().bootstrapModule(CategoriesModule)