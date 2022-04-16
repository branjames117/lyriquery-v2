import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Song {
  constructor(api) {
    this.api = api;
    this.artist = "";
    this.song = {};
    this.id = "";
    this.featured = false;
  }

  activate(params) {
    this.id = params.id;
    console.log(this.id);
    this.api.getSong(params).then((song) => {
      if (song.featuredArtist) {
        this.featured = true;
      }
      console.log(this.featured);
      console.log(song);
      this.song = song;
    });
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
