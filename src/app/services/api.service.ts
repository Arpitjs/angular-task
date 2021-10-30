import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()

export class APIService  {
    constructor(
        private http: HttpClient
    ) {
      
    }
    GetProductData() {
        return this.http.get(environment.url)
    }
    GetOneProductData(id: any) {
        return this.http.get(environment.url + '/' + id)
    }
}