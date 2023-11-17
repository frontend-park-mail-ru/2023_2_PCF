import Api from '../../modules/api.js';
import Template from '../audience_create/audience_create.hbs';
import '../../static/css/audience_create.css';

export default class CreateAudience {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.submitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    this.parent.innerHTML = Template();
    this.form = this.parent.getElementsByClassName('edit-btn')[0];
    this.form.addEventListener('click', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    console.log('onSubmit');
    event.preventDefault();
    const regions = this.form.querySelectorAll('.regions');
    const region = "";
    regions.forEach((reg) => {
      region += reg.value;}) 
    
    const genderCheckboxes = document.querySelectorAll(".gender");
    let Gender = "";
    genderCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            Gender = checkbox.value;
        }
    });

    const inputsValue = {};
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach((input) => {
      console.log(input.name);
      if (input.name === 'name' || input.name === 'min_age' || input.name === 'max_age' || input.name === 'interests' || input.name === 'tags' || input.name === 'keys') {
        inputsValue[input.name] = input.value;
      }
    });
    console.log(inputsValue);
    inputsValue['regions'] = region;
    inputsValue['gender'] = Gender;

      Api.createAudience(inputsValue).then(
        (response) => {
          if (response.status === 201) {
            this.submitCallback();
          } else {
          }
        },
      );
  }
}
