import Publisher from "../publisher.js";
import ModelInfo from "./model_info.js";
import ViewInfo from "./view_info.js";

export default class ControllerInfo {
   constructor() {
      this.model = new ModelInfo();
      this.view = new ViewInfo(this.sendOrderInfo);

      this.publisher = new Publisher();
      this.publisher.subscribe('ON_RENDER_FORM', this.onRenderForm);
      this.publisher.subscribe('ON_RENDER_GOODS', this.getGoods);
   }

   sendOrderInfo = () => {
      if (this.model.validateInput() === true) {
         this.model.sendInfo(this.goods);
      }
   }

   getGoods = (goods) => {
      this.goods = goods;
   }

   onRenderForm = () => {
      this.view.init();
   }
}
