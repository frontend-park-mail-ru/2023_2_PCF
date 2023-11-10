'use strict';

import Api from './modules/api.js';
import Router from './modules/router.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';
import List from './components/list/list.js';
import Company from './components/company/company.js';
import Audience from './components/audience/audience.js';
import CreateAd from './components/createad/createad.js';
import EditPage from './components/editpage/editpage.js';
import NotFound from './components/notfound/notfound.js';
import AudienceCreate from './components/audience_create/audience_create.js';
import NotFoundAudience from './components/notfound_audience/notfound_audience.js';
import Profile from './components/profile/profile.js';


const router = new Router();

const login = new Login(document.getElementById('root'), () => router.go('/company'));
const signup = new Signup(document.getElementById('root'), () => router.go('/company'));
const list = new List(document.getElementById('root'), () => router.go('/list'));
const company = new Company(document.getElementById('root'), () => router.go('/company'));
const audience = new Audience(document.getElementById('root'), () => router.go('/audience'));
const audiencecreate = new AudienceCreate(document.getElementById('root'), () => router.go('/company'));
const createad = new CreateAd(document.getElementById('root'), () => router.go('/createad'));
const editpage = new EditPage(document.getElementById('root'), () => router.go('/editpage'));
const notfound = new NotFound(document.getElementById('root'), () => router.go('/notfound'));
const notfound_audience = new NotFoundAudience(document.getElementById('root'), () => router.go('/notfound_audience'));
const profile = new Profile(document.getElementById('root'), () => router.go('/profile'));

router.add('/login', () => (login.render()));
router.add('/signup', () => (signup.render()));
router.add('/list', () => (list.render()));
router.add('/company', () => (company.render()));
router.add('/audience', () => (audience.render()));
router.add('/audiencecreate', () => (audiencecreate.render()));
router.add('/createad', () => (createad.render()));
router.add('/editpage', () => (editpage.render()));
router.add('/notfound', () => (notfound.render()));
router.add('/notfound_audience', () => (notfound_audience.render()));
router.add('/profile', () => (profile.render()));
router.add('/', () => (company.render()));


router.start();
