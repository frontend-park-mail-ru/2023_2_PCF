export class Validate {
    /**
     *  Валидация данных почты
     *  @param {string} email - Введенные данные
     */

    static Email(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        return emailPattern.test(email);
    }

    /**
     * Валидация данных пароля
     * @param {string} password - Введенные данные
     */

    static Password(password) {
        var passwordPattern = /^[a-zA-Z0-9._-]+$/;
        
        return passwordPattern.test(password)
    }
}