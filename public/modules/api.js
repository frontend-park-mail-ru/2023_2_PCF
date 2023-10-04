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

    static getAds() {
// Извлекаем значение токена из куки
        const token = getSessionToken();

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

function getSessionToken() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'session_token') {
            return decodeURIComponent(value);
        }
    }
    return null;
}
