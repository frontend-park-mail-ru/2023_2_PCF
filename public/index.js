'use strict';

import Api from './modules/api.js';
import './static/css/signup.css'
import Router from './modules/router.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';
import Company from './components/company/company.js';
import Audience from './components/audience/audience.js';
import CreateAd from './components/createad/createad.js';
import EditPage from './components/editpage/editpage.js';
import AudienceCreate from './components/audience_create/audience_create.js';
import Profile from './components/profile/profile.js';
import Announcement from './components/announcement/announcement.js';


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => {
            console.log('sw registered', reg);
        })
        .catch((e) => {
            console.error(e);
        });
}


const router = new Router();

const login = new Login(document.getElementById('root'), () => router.go('/company'));
const signup = new Signup(document.getElementById('root'), () => router.go('/company'));
const company = new Company(document.getElementById('root'), () => router.go('/company'));
const audience = new Audience(document.getElementById('root'), () => router.go('/audience'));
const audiencecreate = new AudienceCreate(document.getElementById('root'), () => router.go('/company'));
const createad = new CreateAd(document.getElementById('root'), () => router.go('/createad'));
const editpage = new EditPage(document.getElementById('root'), () => router.go('/editpage'));
const profile = new Profile(document.getElementById('root'), () => router.go('/profile'));
const announcement = new Announcement(document.getElementById('root'), () => router.go('/announcement'));

router.add('/login', () => (login.render()));
router.add('/signup', () => (signup.render()));
router.add('/company', () => (company.render()));
router.add('/audience', () => (audience.render()));
router.add('/audiencecreate', () => (audiencecreate.render()));
router.add('/createad', () => (createad.render()));
router.add('/editpage', () => (editpage.render()));
router.add('/profile', () => (profile.render()));
router.add('/announcement', () => (announcement.render()));
router.add('/', () => (company.render()));


router.start();
