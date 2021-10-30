import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CategoriesComponent } from './categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

let routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {
                path: 'all-categories', component: CategoriesComponent
            },
            {
                path: 'product/:id', component: ProductsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }