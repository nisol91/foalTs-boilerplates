import { controller, Get, render } from "@foal/core";

import { ApiController } from "./controllers";

export class AppController {
  subControllers = [controller("/api", ApiController)];
  @Get("/template")
  index_test() {
    return render("./templates/index_test.html", {
      name: "Alix",
      title: "Home!!",
    });
  }
  @Get("/")
  index() {
    return render("templates/index.html");
  }
  @Get("/signin")
  signin() {
    return render("templates/signin.html");
  }

  @Get("/signup")
  signup() {
    return render("templates/signup.html");
  }
}
