import Publisher from "../publisher";
import ViewSearch from "./view_search";

export default class ControllerSearch {
  constructor() {
    this.view = new ViewSearch(this.onSearch);
    this.view.init();
    this.publisher = new Publisher();
    this.searchQuery = null;
  }
  onSearch = (e) => {
    e.preventDefault();
    this.searchQuery = e.target.query.value;
    this.publisher.notify("ON_SEARCH", this.searchQuery);
  };
}
