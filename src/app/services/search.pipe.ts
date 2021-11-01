import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'appSearch' })
export class SearchPipe implements PipeTransform {
  matchedCategories: any = []
  transform(products: any[], searchText: string): any[] {
    if (!products) {
      return []
    }
    if (!searchText) {
      return products
    }
    searchText = searchText.toLocaleLowerCase()

    return products.filter(product => product.title.toLocaleLowerCase().includes(searchText))
  
  }
}
