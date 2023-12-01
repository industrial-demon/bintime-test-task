import { action, makeObservable, observable } from "mobx";
import { Article } from "./entity/article";

export type Category =
  | ""
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

/* 
   one of parameters is required, so can't be empty string
   add "us" as init
*/
export type Country = "us" | "de" | "pl" | "gb" | "ua";

export class RootStore {
  country: Country = "us";
  category: Category = "";
  q: string = "";

  showFilters: boolean = true;

  selectedArticle: null | Article = null;

  constructor(readonly pagination: PaginationControl) {
    makeObservable(
      this,
      {
        country: observable,
        q: observable,
        category: observable,
        showFilters: observable,
        selectedArticle: observable,
        changeCountry: action,
        changeQuery: action,
        changeCategory: action,
        selectArticle: action,
        toggleFilters: action.bound,
      },
      { autoBind: true }
    );
  }

  changeCountry(country: Country) {
    this.country = country;
  }

  changeCategory(category: Category) {
    this.category = category;
  }

  changeQuery(q: string) {
    this.q = q;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  selectArticle(article: Article) {
    this.selectedArticle = article;
  }
}

export class PaginationControl {
  page: number = 0;
  pageSize: number = 10;

  constructor() {
    makeObservable(
      this,
      {
        page: observable,
        pageSize: observable,
        changePage: action,
        changePerPage: action,
      },
      { autoBind: true }
    );
  }

  changePage(page: number) {
    this.page = page;
  }

  changePerPage(pageSize: number) {
    this.pageSize = pageSize;
  }
}
