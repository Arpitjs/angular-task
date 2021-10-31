import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'

let routes: Routes = [
    { 
        path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}