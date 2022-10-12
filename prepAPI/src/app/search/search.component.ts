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

  constructor(public food: FoodService) { 
    if (localStorage.getItem("dataSource") != null)
    {
      let data:any  = localStorage.getItem("dataSource");
      this.results = JSON.parse(data)

    }
    else {
      console.log("EMPTY []")
    }
  }

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
      localStorage.setItem('dataSource', JSON.stringify(this.results));
    });
  }
  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
  clear():boolean{
    localStorage.removeItem("dataSource")
    window.location.reload();
    return true;
  }
}