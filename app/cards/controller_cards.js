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
    console.log("filterType", filterType); //drama, satira
    console.log("model", this.model); //data:[{}, {}]

    // for (const book of this.model.data) {
    //   console.log("genre", book.genre);
    //   const genre = book.genre;
    //   const data = genre.filterData(filterType);
    //   this.view.renderCards(data);
    // }
    const data = this.model.filterData(filterType);
    console.log(data);

    this.view.renderCards(data);
  }
}
