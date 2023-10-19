'use strict';


import Router from './modules/router.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';
import List from './components/list/list.js';


const router = new Router();

const login = new Login(document.getElementById('root'), () => router.go('/list'));
const signup = new Signup(document.getElementById('root'), () => router.go('/login'));
const list = new List(document.getElementById('root'), () => router.go('/list'));
router.add('/login', () => (login.render()));
router.add('/signup', () => (signup.render()));
router.add('/list', () => (list.render()));

router.start();
