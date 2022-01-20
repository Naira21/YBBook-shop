export default class ViewModal {
  BODY_MAIN = document.body.querySelector("main");

  constructor({ cardInfo, onOpenModal, onCloseModal }) {
    //получаем функции и карточку
    this.cardInfo = cardInfo; //нужно получить инфу о карточке по клику
    this.onOpenModal = onOpenModal; //принимаем функции, чтоб передать их в слушатель
    this.onCloseModal = onCloseModal;
    this.onBackdropClick = onBackdropClick;
  }

  init() {
    this.renderModal();
    this.addOpenListener(this.onOpenModal); // записывает слушатель который будет запускать
    this.addCloseListener(this.onCloseModal);
    this.backdropListener(this.onBackdropClick);
  }
  addOpenListener(listener) {
    document
      .querySelector('data-action="open-modal"')
      .addEventListener("click", listener); //обращаемся к диву с карточкой + вешаем слушатель на див
  }
  addCloseListener(listener) {
    document
      .querySelector('data-action="close-modal"')
      .addEventListener("click", listener); //обращаемся к диву с карточкой + вешаем слушатель на див
  }
  backdropListener(listener) {
    document.querySelector(".js-backdrop").addEventListener("click", listener); //обращаемся к диву с backdrop + вешаем слушатель на див
  }

  renderModal({ description, name } = this.cardInfo) {
    //this.cardInfo должна передавать нам инфу по книге, чтоб мы могли взять из неё
    const modal = `<div class="backdrop js-backdrop">
        <div class="modal">
          <h2>${name}</h2>
          <p>${description}</p>
          <button type="button" class="button" data-action="close-modal">
            Закрыть
          </button>
        </div>
      </div>`;
    this.BODY_MAIN.insertAdjacentHTML("afterbegin", modal).join("");
  }
}
