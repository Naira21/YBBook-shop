export default class ViewFilter {
  BODY_HEADER = document.body.querySelector("header");
  GENRES_FILTER_SELECTOR = ".genres";

  constructor(handleFilterClick) {
    this.handleFilterClick = handleFilterClick;
  }

  init() {
    this.renderGenresFilter();
    this.addListeners(this.handleFilterClick);
  }
  addListeners(listener) {
    [...document.querySelectorAll(this.GENRES_FILTER_SELECTOR)].forEach(
      (checkbox) => checkbox.addEventListener("click", listener)
    );
  }

  renderGenresFilter() {
    const checkboxGenres = `
        <section class="genres" data-btn='checkbox_genres'>
          Жанры
          <div class="form-check">
            <input
              class="form-check-input genres"
              type="checkbox"
              value="novel"
              id="flexCheckDefault"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckDefault">
              Роман
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="satire"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Сатира
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="parable"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Притча
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="sf"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Научная фантастика
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="story "
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Повесть
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="drama"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Драма
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="fantasy"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Фэнтези
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="fairytale"
              id="flexCheckChecked"
              data-btn='checkbox_genres'

            />
            <label class="form-check-label" for="flexCheckChecked">
              Сказка
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Эссе"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Эссе
            </label>
          </div>
        </section>`;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", checkboxGenres);
  }
}
