import { Ajax } from "./ajax.js";

const URLS = {
    login: "/auth",
    signup: "/user",
};

const BACKEND_URL = "http://localhost:8080";

export class Api{
    static login(data={}){
        return Ajax.post(BACKEND_URL + URLS.login, data);
    }

    static signup(data={}){
        return Ajax.post(BACKEND_URL + URLS.singup, data)
    }

    static logout(){
        return Ajax.get(BACKEND_URL + URLS.logout)
    }
}