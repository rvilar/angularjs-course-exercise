import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../line-item';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css']
})
export class ListItemDetailComponent implements OnInit {

  @Input('product') lineItem: LineItem;

  constructor() { }

  ngOnInit() {
  }

}
