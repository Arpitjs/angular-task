import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CategoriesComponent } from './categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

let routes: Routes = [
    {
        path: '', component: DashboardComponent,
    },
    {
        path: 'categories', component: CategoriesComponent
    },
    {
        path: 'product/:id', component: ProductsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CategoryRoutingModule { }