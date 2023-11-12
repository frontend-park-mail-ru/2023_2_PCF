import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/notfound_audience.css';
import Template from './notfound_audience.hbs';

export default class NotFoundAudience {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    this.parent.innerHTML = Template();
  }

}
