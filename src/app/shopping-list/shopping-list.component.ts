import { Component, OnInit } from '@angular/core';
import { LineItem } from '../line-item';
import { SHOPPING_LIST } from '../mock-shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: LineItem[];
  isEmpty: boolean;
  selectedLineItem: LineItem;

  constructor() {}

  ngOnInit() {
    this.shoppingList = SHOPPING_LIST;
    this.isEmpty = false;
  }

  deleteList() {
    this.shoppingList = [];
    this.isEmpty = true;
  }

  selectCurrent(item: LineItem) {
    this.selectedLineItem = item;
  }

  listAddItem(item: LineItem) {
    this.shoppingList.push(item);
  }

}
