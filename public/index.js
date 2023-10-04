"use strict";


import { Router } from "./modules/router.js";
import { Login } from "./components/login/login.js";
import { Signup } from "./components/signup/signup.js";
import { List } from "./components/list/list.js";


let router = new Router();

let login = new Login(document.getElementById("root"), () => router.go("/list"))
let signup = new Signup(document.getElementById("root"), () => router.go("/login"))
let list = new List(document.getElementById("root"), () => router.go("/list"))
router.add("/login", () => (login.render()))
router.add("/signup", () => (signup.render()))
router.add("/list", () => (list.render()))

router.start()