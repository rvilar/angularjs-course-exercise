import { Component } from '@angular/core';
import { LineItem } from './line-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shoppingList: LineItem[];
  isEmpty: boolean;
  selectedLineItem: LineItem;

  ngOnInit() {
    this.shoppingList = [
      new LineItem('id1', 'Cereals'),
      new LineItem('id2', 'Mosquits'),
      new LineItem('id6', 'Conill'),
      new LineItem('id7', 'Patata'),
    ];
    this.isEmpty = false;
  }

  deleteList() {
    this.shoppingList = [];
    this.isEmpty = true;
  }

  selectCurrent(item: LineItem) {
    this.selectedLineItem = item;
  }
}
