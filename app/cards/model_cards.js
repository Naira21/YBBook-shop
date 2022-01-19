export default class ModelCards {
  URL_SHEET =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQirlHBLU299aaZ7rqDdrC48Cb50Tb-8s_YK7-XIIpoFAS9uy9pnDki0uuxehglgHYLID9xt7q4wWRg/pub?output=tsv";

  getData() {
    return fetch(this.URL_SHEET)
      .then((response) => response.text())
      .then((data) => this.parseSheet(data));
  }

  parseSheet(tsv) {
    const d = tsv.split("\r\n").map((line) => line.split("\t"));
    const keys = d.shift();
    const data = d.map((arr) =>
      arr.reduce((obj, prop, i) => {
        obj[keys[i]] = prop;
        return obj;
      }, {})
    );
    this.data = data;
    return data;
  }

  sortData(sortType, i) {
    const sortVoc = {
      "price-up": 1,
      "price-dn": -1,
      "rating-up": 1,
      "rating-dn": -1,
    };
    let param = i % 2 === 0 ? "price" : "rating";

    this.data.sort((a, b) => (a[param] - b[param]) * sortVoc[sortType]);
    return this.data;
  }

  filterData(filterType) {
    // const filterVoc = {
    //   novel: 1,
    //   sf: 1,
    //   satire: 1,
    //   parable: 1,
    //   story: 1,
    //   drama: 1,
    //   fantasy: 1,
    //   fairytale: 1,
    //   essay: 1,
    // };
    const filteredData = this.data.filter(
      (d) => d.genres === filterType
    );
    return filteredData;
  }
}
