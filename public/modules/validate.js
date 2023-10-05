export class Validate {
    /**
     *  Валидация данных почты
     *  @param {string} email - Введенные данные
     */

    static Email(email) {
        var emailPattern = /^[a-zA-Z0-._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        return emailPattern.test(email);
    }

    /**
     * Валидация данных пароля
     * @param {string} password - Введенные данные
     */

    static Password(password) {
        return password.length > 5 && /^[a-zA-Z0-._-]+$/.test(password)
    }
}