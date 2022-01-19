import ControllerCards from "./cards/controller_cards.js";
import ControllerFilter from "./filter/controller_filter.js";
import ControllerSort from "./sort/controller_sort.js";

const controllerCards = new ControllerCards();
const controllerSort = new ControllerSort(
  controllerCards.handleSort.bind(controllerCards)
);
const controllerFilter = new ControllerFilter(
  controllerCards.handleFilter.bind(controllerCards)
);
