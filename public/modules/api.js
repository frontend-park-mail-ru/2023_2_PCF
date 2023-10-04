import { Ajax } from "./ajax.js";
import Cookies from "js-cookie";

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

    static getAds() {
// Извлекаем значение токена из куки
        const token = Cookies.get("token");

// Проверяем, что токен существует
        if (!token) {
            console.error("Токен не найден в куки");
            return Promise.reject("Токен не найден в куки");
        }

// Добавляем токен в параметры запроса
        const queryParams = `?token=${token}`;

// Отправляем GET-запрос с токеном
        return Ajax.get(BACKEND_URL + URLS.ad + queryParams);
    }

    static logout(){
        return Ajax.get(BACKEND_URL + URLS.logout)
    }
}