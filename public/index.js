"use strict";


import { Router } from "./modules/router.js";
import { Login } from "./components/login/login.js";


let router = new Router();

let login = new Login(document.getElementById("root"), () => router.go("/index"))

router.add("/login", () => login.render())

router.start()