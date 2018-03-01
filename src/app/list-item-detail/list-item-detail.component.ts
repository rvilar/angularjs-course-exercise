import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../line-item';
import { SHOPPING_LIST } from '../mock-shopping-list';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css']
})
export class ListItemDetailComponent implements OnInit {

  @Input('product') lineItem: LineItem;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    SHOPPING_LIST.forEach((key, item) => {
      if (key.id === id) {
        this.lineItem = key;
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
