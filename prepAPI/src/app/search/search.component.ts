import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  obsProduct: any;
  results: any;

  constructor(public food: FoodService) { }

  ngOnInit(): void {

  }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.food.searchProduct(this.query);
    this.obsProduct.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

}