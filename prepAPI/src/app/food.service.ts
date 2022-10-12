import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  http: any;

  constructor() { }

  searchProduct(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=9&json=true`;
    let obsSE = this.http.get(url);
    return obsSE;
  }
}