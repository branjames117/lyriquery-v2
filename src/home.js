import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Home {
  constructor(api) {
    this.api = api;
  }
}
