'use strict';


import Router from './modules/router.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';
import List from './components/list/list.js';
import Company from './components/company/company.js';
import Auidience from './components/audience/audience.js';
import CreateAd from './components/createad/createad.js';
import EditPage from './components/editpage/editpage.js';
import NotFound from './components/notfound/notfound.js';
import NotFoundAudience from './components/notfound_audience/notfound_audience.js';
import Profile from './components/profile/profile.js';


const router = new Router();

const login = new Login(document.getElementById('root'), () => router.go('/list'));
const signup = new Signup(document.getElementById('root'), () => router.go('/login'));
const list = new List(document.getElementById('root'), () => router.go('/list'));
const company = new Company(document.getElementById('root'), () => router.go('/company'));
const auidience = new Auidience(document.getElementById('root'), () => router.go('/auidience'));
const createad = new CreateAd(document.getElementById('root'), () => router.go('/createad'));
const editpage = new EditPage(document.getElementById('root'), () => router.go('/editpage'));
const notfound = new NotFound(document.getElementById('root'), () => router.go('/notfound'));
const notfound_audience = new NotFoundAudience(document.getElementById('root'), () => router.go('/notfound_audience'));
const profile = new Profile(document.getElementById('root'), () => router.go('/profile'));


router.add('/login', () => (login.render()));
router.add('/signup', () => (signup.render()));
router.add('/list', () => (list.render()));
router.add('/company', () => (company.render()));
router.add('/auidience', () => (auidience.render()));
router.add('/createad', () => (createad.render()));
router.add('/editpage', () => (editpage.render()));
router.add('/notfound', () => (notfound.render()));
router.add('/notfound_audience', () => (notfound_audience.render()));
router.add('/profile', () => (profile.render()));

router.start();
