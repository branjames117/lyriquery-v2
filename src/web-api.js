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
    return this.http
      .get("http://localhost:3000/database", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => data);
  }

  getResults(params) {
    console.log("params", params);
    return this.http
      .fetch("http://localhost:3000/search", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => data);
  }

  getArtist(params) {
    console.log("params", params);
    return this.http
      .fetch("http://localhost:3000/artist", {
        method: "post",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => data);
  }
}
