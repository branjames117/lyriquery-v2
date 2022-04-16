import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Search {
  constructor(api) {
    this.api = api;
    this.query = [
      "exile",
      "lover",
      "blank space baby",
      "big reputation",
      "secret",
      "handsome",
      "remember",
      "die",
    ][Math.floor(Math.random() * 8)];
    this.artist = "Taylor Swift";
  }
}
