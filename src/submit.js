import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Submit {
  constructor(api) {
    this.api = api;
  }
}
