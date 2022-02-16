import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce-category',
  templateUrl: './e-commerce-category.component.html',
  styleUrls: ['./e-commerce-category.component.scss'],
})
export class ECommerceCategoryComponent implements OnInit {
  rowArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  columnArray = [0, 1, 2, 3];
  priceSorting: string = "High-Low";
  constructor() {}

  ngOnInit(): void {}

  onClickLayout(layout: string): void {
    if(layout=='grid'){
      this.rowArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.columnArray = [0, 1, 2, 3];
    } else {
      this.rowArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19];
      this.columnArray = [0, 1];
    }
  }

  onSelectPrice(sorting:string) : void {
    this.priceSorting = sorting;
  }
}
