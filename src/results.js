import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Results {
  constructor(api) {
    this.api = api;
    this.results = [];
    this.artist = "";
    this.query = "";
  }

  activate(params) {
    this.artist = params.artist;
    this.query = params.query;
    this.api.getResults(params).then((results) => (this.results = results));
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
