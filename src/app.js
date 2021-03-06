import { inject, PLATFORM } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class App {
  constructor(api) {
    this.api = api;
    this.year = new Date().getFullYear();
  }

  configureRouter(config, router) {
    config.title = "LyriQuery v2";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "/",
        moduleId: PLATFORM.moduleName("home"),
        title: "Home",
      },
      {
        route: "/database",
        moduleId: PLATFORM.moduleName("database"),
        title: "Database",
      },
      {
        route: "/doc",
        moduleId: PLATFORM.moduleName("doc"),
        title: "Documentation",
      },
      {
        route: "/submit",
        moduleId: PLATFORM.moduleName("submit"),
        title: "Submit",
      },
      {
        route: "/results",
        moduleId: PLATFORM.moduleName("results"),
        title: "Results",
        name: "results",
      },
      {
        route: "/song/:id",
        moduleId: PLATFORM.moduleName("song"),
        title: "Song",
      },
      {
        route: "/artist/:artist",
        moduleId: PLATFORM.moduleName("artist"),
        title: "Artist",
      },
      {
        route: "/artist/:artist/:album",
        moduleId: PLATFORM.moduleName("album"),
        title: "Album",
      },
    ]);

    this.router = router;
  }
}
