"use strict";

import Api from "./modules/api.js";
import "./static/css/signup.css";
import Router from "./modules/router.js";
import Login from "./pages/login/login.ts";
import Signup from "./pages/signup/signup.ts";
import Company from "./pages/company/company.ts";
import Audience from "./pages/audience/audience.ts";
import CreateAd from "./pages/createad/createad.ts";
import EditPage from "./pages/editpage/editpage.ts";
import AudienceCreate from "./pages/audience_create/audience_create.ts";
import Profile from "./pages/profile/profile.ts";
import Announcement from "./pages/announcement/announcement.ts";
import ProfileAd from "./pages/profilead/profilead.ts";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => {
      console.log("sw registered", reg);
    })
    .catch((e) => {
      console.error(e);
    });
}

const router = new Router();

const login = new Login(document.getElementById("root"), () =>
  router.go("/company")
);
const signup = new Signup(document.getElementById("root"), () =>
  router.go("/company")
);
const company = new Company(document.getElementById("root"), () =>
  router.go("/company")
);
const audience = new Audience(document.getElementById("root"), () =>
  router.go("/audience")
);
const audiencecreate = new AudienceCreate(document.getElementById("root"), () =>
  router.go("/company")
);
const createad = new CreateAd(document.getElementById("root"), () =>
  router.go("/createad")
);
const editpage = new EditPage(document.getElementById("root"), () =>
  router.go("/editpage")
);
const profile = new Profile(document.getElementById("root"), () =>
  router.go("/profile")
);
const announcement = new Announcement(document.getElementById("root"), () =>
  router.go("/announcement")
);
const profilead = new ProfileAd(document.getElementById("root"), () =>
  router.go("/profilead")
);

router.add("/login", () => login.render());
router.add("/signup", () => signup.render());
router.add("/company", () => company.render());
router.add("/audience", () => audience.render());
router.add("/audiencecreate", () => audiencecreate.render());
router.add("/createad", () => createad.render());
router.add("/editpage", () => editpage.render());
router.add("/profile", () => profile.render());
router.add("/", () => company.render());
router.add("/announcement", () => announcement.render());
router.add("/profilead", () => profilead.render());

router.start();
