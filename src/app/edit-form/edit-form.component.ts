import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LineItem } from '../line-item';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  addProduct: FormGroup;
  @Output() onAddProduct = new EventEmitter<LineItem>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addProduct = this.fb.group({
      id: '',
      name: ['', Validators.required],
      quantity: ''
    })
  }

  onSubmit() {
    let lineItem: LineItem = new LineItem(this.addProduct.value.id, this.addProduct.value.name, this.addProduct.value.quantity);
    this.onAddProduct.emit(lineItem);
  }

}
