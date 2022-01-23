import ModelBooks from "./model_books.js";
import ViewBooks from "./view_books.js";

export default class ControllerBooks {
  constructor() {
    this.model = new ModelBooks();
    this.view = new ViewBooks();
    this.init();
  }
  init() {
    this.model.getData().then((d) => this.view.renderBooks(d));
  }

  // handleFilter(filterType) {
  //   console.log(filterType);
  //   const data = this.model.getFilterData(sortType);
  //   this.view.renderBooks(data);
  // }
}
