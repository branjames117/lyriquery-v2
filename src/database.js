import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Database {
  constructor(api) {
    this.api = api;
    this.database = [];
  }

  activate() {
    this.api.getDatabase().then((database) => (this.database = database));
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
