export default class ViewSearch {
  BODY_HEADER = document.body.querySelector("header");
  constructor(onSearchClick) {
    this.onSearchClick = onSearchClick;
  }
  init() {
    this.getInputSearch();
    this.addInputListener(this.onSearchClick);
  }

  addInputListener(listener) {
    document
      .querySelector(".form-control")
      .addEventListener("change", listener);
  }

  getInputSearch() {
    const inputSearchArea = `
    <div class="input-group">
        <span class="input-group-text">Your book</span>
        <textarea class="form-control" name="query" aria-label="Search book" placeholder="Search by name"></textarea>
    </div>`;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", inputSearchArea);
  }
}
