
export default class Menu {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null;
      }    

      render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/menu.css';
        document.head.appendChild(link);
      }
}