import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(handleClickOnCard) {
    this.view = new ViewModal(this.cardInfo);
    this.handleClickOnCard = handleClickOnCard;

    this.view.init();
  }

  onOpenModal() {
    document.body.classList.add("show-modal");
  }
  onCloseModal() {
    document.body.classList.remove("show-modal");
  }
  onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }
}
