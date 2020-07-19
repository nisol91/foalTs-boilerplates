import { SignupController, AuthController } from "./controllers";
import { controller, Get, render, TokenRequired } from "@foal/core";
import { TypeORMStore } from "@foal/typeorm";

import { ApiController } from "./controllers";

export class AppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/auth", AuthController),
    controller("/signup", SignupController),
  ];
  @Get("/template")
  index_test() {
    return render("./templates/index_test.html", {
      name: "Alix",
      title: "Home!!",
    });
  }
  @Get("/")
  // "/" route is protected with token
  @TokenRequired({
    // The session token is expected to be in a cookie.
    cookie: true,
    // Redirect the user to /signin if they are not logged in.
    redirectTo: "/signin",
    // Specify the "store" where the session was created.
    store: TypeORMStore,
  })
  index() {
    return render("templates/index.html");
  }
  @Get("/vini")
  vini() {
    return render("templates/vini.html");
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
