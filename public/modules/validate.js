export class Validate {
  /**
     *  Валидация данных почты
     *  @param {string} email - Введенные данные
     */

  static email(email) {
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return emailPattern.test(email);
  }

  /**
     * Валидация данных пароля
     * @param {string} password - Введенные данные
     */

  static password(password) {
    const passwordPattern = /^[a-zA-Z0-9._-]{6,35}$/;

    return passwordPattern.test(password);
  }
}
