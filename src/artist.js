import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Artist {
  constructor(api) {
    this.api = api;
    this.songs = [];
    this.artist = "";
  }

  activate(params) {
    this.artist = params.artist;
    this.api.getArtist(params).then((songs) => (this.songs = songs));
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
