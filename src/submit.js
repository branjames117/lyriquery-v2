import { inject } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class Submit {
  constructor(api) {
    this.api = api;
    this.body = {
      artist: "",
      featuredArtist: "",
      title: "",
      trackNumber: "",
      album: "",
      authors: "",
      year: "",
      lyrics: "",
    };
  }

  submitSong() {
    console.log("submitting song");
    console.log(this.body);
    this.api.submitSong(this.body).then((results) => (this.results = results));
    console.log(this.artist);
  }
}
