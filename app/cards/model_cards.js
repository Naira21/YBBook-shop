export default class ModelCards {
   URL_SHEET =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQirlHBLU299aaZ7rqDdrC48Cb50Tb-8s_YK7-XIIpoFAS9uy9pnDki0uuxehglgHYLID9xt7q4wWRg/pub?output=tsv";

   getData() {
      return fetch(this.URL_SHEET)
         .then((response) => response.text())
         .then((data) => this.parseSheet(data));
   }

   parseSheet = (tsv) => {
      const d = tsv.split("\r\n").map((line) => line.split("\t"));
      const keys = d.shift();
      const data = d.map((arr) =>
         arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
         }, {})
      );
      this.DATA = data;
      this.data = data;
      return data;
   };

   sortData([sortType, i]) {
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
      this.data = [];
      for (const type of filterType) {
         let filtredSubarray = this.DATA.filter((d) => d.genre.includes(type));
         this.data = this.data.concat(filtredSubarray);
      }
      return this.data.length > 0 ? this.data : this.DATA;
   }

   getBooksByQuery(searchQuery) {
      const input = document.querySelector(".form-control");
      const getBooksByTitle = this.data.filter((s) =>
         s.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const getBooksByAuthor = this.data.filter((s) =>
         s.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      let getBooks = [];
      getBooks = Array.from(new Set(getBooks.concat(getBooksByTitle).concat(getBooksByAuthor)));
      if (getBooks.length === 0) {
         alert("Книги с таким названием не найдено");
         input.value = "";
         return this.data;
      }
      return getBooks;
   }
}
