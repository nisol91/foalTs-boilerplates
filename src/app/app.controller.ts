import { controller, Get, render } from "@foal/core";

import { ApiController } from "./controllers";

export class AppController {
  subControllers = [controller("/api", ApiController)];
  @Get("/template")
  index() {
    return render("./templates/index.html", {
      name: "Alix",
      title: "Home!!",
    });
  }
}
