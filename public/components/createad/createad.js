import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/createad.css';
import { BACKEND_URL } from '../../modules/api.js';
import Template from './createad.hbs';

const context = {
  Audience: [],
};


export default class CreateAd {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    this.parent.innerHTML = Template();
    this.form = this.parent.querySelector('.createad');
  
    Api.getAudienceList().then((data) => {
      context.Audience = data.parsedJson;
      this.renderTemplate();
    }).catch((error) => {
      console.error('Ошибка:', error);
    });



  }

  renderTemplate() {
    console.log(context.Audience);

    document.getElementById('file-upload').addEventListener('change', function() {
      var fileName = '';
      if (this.files && this.files.length > 0) {
        fileName = this.files[0].name;
      }
      document.getElementById('file-name-display').value = fileName;

      var file = this.files[0];
      if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
              document.querySelector('.createad__preview-image').src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
    });

    let targetList = document.querySelector('.dropdown');
    context.Audience.forEach((audience) => {
      let op = document.createElement('option');
      op.class = 'dropdown-content';
      op.textContent = "Аудитория" + audience.id;
      op.value = audience.id;
      targetList.appendChild(op);
    });

    this.form.querySelector('#name').addEventListener('input', (event) => {
      // Ensure the event listener is using the event parameter to get the current value.
      const previewTitle = document.querySelector('.createad__preview-title'); // Ensure this element exists in your HTML.
      if (previewTitle) {
        previewTitle.textContent = event.target.value; // Use event.target.value to get the current input's value.
      }
    });
  
    // Attach event listeners to the description input field.
    this.form.querySelector('#description').addEventListener('input', (event) => {
      // Ensure the event listener is using the event parameter to get the current value.
      const previewDescription = document.querySelector('.createad__preview-desription'); // Ensure this element exists in your HTML.
      if (previewDescription) {
        previewDescription.textContent = event.target.value; // Use event.target.value to get the current input's value.
      }
    });

    document.querySelector('#submitBtn').addEventListener('click', () => {
      this.submit()
    });
    
    
  }

  submit() {
    const form = document.querySelector('#createAd');
    const formData = new FormData(form);
    console.log('submit');
    const inputs = this.form.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.id === 'name' || input.id === 'description' || input.id === 'website_link' || input.id === 'budget') {
        formData.append(input.id, input.value);
      } else if (input.id === 'file-upload') {
        if (input.files[0] != null) {
          formData.append('image', input.files[0]);
        } else {
          formData.append('image', null);
        }

      }
    });

    let input = document.querySelector('.dropdown');
    formData.append('target_id', input.value);

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include', // Если требуется передача авторизационных данных
      body: formData,
  };

  try {
      // Отправляем запрос на сервер
      const response = fetch(BACKEND_URL + "/ad", requestOptions);

      if (response.ok) {
          location.href="/company";
      } else {
          // Обработка ошибки
          const errorData = response.json();
      }
  } catch (error) {
      console.log(error);
  }
  }

}