import '../../static/css/menu.css'
export default class Menu {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null;
      }    

      render() {

      }
}