import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Album {
  constructor(api) {
    this.api = api;
    this.songs = [];
    this.artist = "";
    this.album = "";
  }

  activate(params) {
    this.artist = params.artist;
    this.album = params.album;
    this.api.getAlbum(params).then((songs) => (this.songs = songs));
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
