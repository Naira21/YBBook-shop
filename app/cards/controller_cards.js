import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards {
  constructor() {
    this.model = new ModelCards();
    this.view = new ViewCards();

    this.init();
  }

  init() {
    this.model.getData().then((data) => this.view.renderCards(data));
  }

  handleSort(sortType, i) {
    const data = this.model.sortData(sortType, i);
    this.view.renderCards(data);
  }

  handleFilter(filterType) {
    console.log(this, filterType);
    const data = this.model.filterData(filterType);
    this.view.renderCards(data);
  }
}
