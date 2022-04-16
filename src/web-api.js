import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class WebAPI {
  isRequesting = false;

  constructor(http) {
    this.http = http;
    this.database = [];
  }

  getDatabase() {
    this.isRequesting = true;
    return this.http
      .get("http://localhost:3000/database", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }

  getResults(params) {
    this.isRequesting = true;
    return this.http
      .fetch("http://localhost:3000/search", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }

  getArtist(params) {
    this.isRequesting = true;
    return this.http
      .fetch("http://localhost:3000/artist", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }

  getAlbum(params) {
    this.isRequesting = true;
    return this.http
      .fetch("http://localhost:3000/album", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }

  getSong(params) {
    this.isRequesting = true;
    return this.http
      .fetch("http://localhost:3000/song", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }

  submitSong(body) {
    this.isRequesting = true;
    return this.http
      .fetch("http://localhost:3000/submit", {
        method: "post",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.isRequesting = false;
        return data;
      });
  }
}
