import ViewFilter from "./view_filter.js";

export default class ControllerFilter {
  constructor(handleFilterByContrCards) {
    this.view = new ViewFilter(this.handleFilterClick.bind(this));
    this.handleFilterByContrCards = handleFilterByContrCards;
    this.view.init();
  }

  handleFilterClick(e) {
    const filterType = e.target.value;
    if (e.target.value === undefined) {
      return;
    }
    this.handleFilterByContrCards(filterType);
  }
}
