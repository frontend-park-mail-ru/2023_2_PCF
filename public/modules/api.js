import { Ajax } from "./ajax.js";

const URLS = {
    login: "/login",
    /*logout: "/auth/logout",
    singup: "/auth/signup",
    feed: "/api/feed",*/
};

const BACKEND_URL = "http://localhost:8000";

export class Api{
    static login(data={}){
        return Ajax.post(BACKEND_URL + URLS.login, data);
    }
}