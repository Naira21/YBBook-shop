import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(handleClickOnCard) {
    //получаем клик от юзера
    this.view = new ViewModal(this.cardInfo); //передаем информацию о карточке дальше во вью
    this.handleClickOnCard = handleClickOnCard;

    this.view.init(); //выполнить код во вью
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
