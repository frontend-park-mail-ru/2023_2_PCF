import { Ajax } from "./ajax.js";

const URLS = {
    login: "/auth",
    signup: "/user",
    ad: "/ad"
};

const BACKEND_URL = "http://localhost:8080";

export class Api{
    static login(data={}){
        return Ajax.post(BACKEND_URL + URLS.login, data);
    }

    static signup(data={}){
        return Ajax.post(BACKEND_URL + URLS.signup, data)
    }

    static getAds(data={}){
        return Ajax.get(BACKEND_URL + URLS.ad);
    }

    static logout(){
        return Ajax.get(BACKEND_URL + URLS.logout)
    }
}