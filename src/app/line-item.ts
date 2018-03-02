export class LineItem {
  id: string;
  name: string;
  quantity: number

  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }
}
