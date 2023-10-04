export class List {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/list.css';
        document.head.appendChild(link);
        this.parent.innerHTML = Handlebars.templates["list.hbs"]();
    }
}
