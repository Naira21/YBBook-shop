export default class ViewModal {
  BODY_MAIN = document.body.querySelector("main");

  constructor({ cardInfo, onOpenModal, onCloseModal }) {
      this.cardInfo = cardInfo; 
    this.onOpenModal = onOpenModal; 
    this.onCloseModal = onCloseModal;
    this.onBackdropClick = onBackdropClick;
  }

  init() {
    this.renderModal();
    this.addOpenListener(this.onOpenModal); 
    this.addCloseListener(this.onCloseModal);
    this.backdropListener(this.onBackdropClick);
  }
  addOpenListener(listener) {
    document
      .querySelector('data-action="open-modal"')
      .addEventListener("click", listener); 
  }
  addCloseListener(listener) {
    document
      .querySelector('data-action="close-modal"')
      .addEventListener("click", listener); 
  }
  backdropListener(listener) {
    document.querySelector(".js-backdrop").addEventListener("click", listener); 
  }

  renderModal({ description, name } = this.cardInfo) {    
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
