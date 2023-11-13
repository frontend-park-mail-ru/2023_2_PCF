import Api from '../../modules/api.js';
import '../../static/css/editpage.css';
import { BACKEND_URL } from '../../modules/api.js';
import Template from './editpage.hbs';
const context = {
  ad: [],
  Audience: [],
}
const urlParams = new URLSearchParams(window.location.search);

const adID = urlParams.get('id');


export default class EditPage {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {

    Api.getAd(adID).then(
    (data) => { 
      console.log(data);
      context.ad = data.parsedJson;
    }
    ).catch((error) => {
      console.error('Ошибка:', error);
    }
    );

    Api.getAudienceList().then((data) => {
      context.Audience = data.parsedJson;
      this.renderTemplate();
    }).catch((error) => {
      console.error('Ошибка:', error);
    });

    this.parent.innerHTML = Template();
    this.form = this.parent.querySelector('#createAd');

    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');
      }


  renderTemplate() {
    const inputs = this.form.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.id === 'name' || input.id === 'description' || input.id === 'website_link' || input.id === 'budget' || input.id === "website_link") {
        input.value = context.ad[input.id];
      }
    });
    document.querySelector('.editpage__preview-image').src = Api.getImage(context.ad.image_link);
    document.querySelector('.editpage__preview-desription').textContent = context.ad.description;
    document.querySelector('.editpage__preview-title').textContent = context.ad.name;

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
              document.querySelector('.editpage__preview-image').src = e.target.result;
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
      const previewTitle = document.querySelector('.editpage__preview-title');
      if (previewTitle) {
        previewTitle.textContent = event.target.value;
      }
    });
  
    this.form.querySelector('#description').addEventListener('input', (event) => {
      const previewDescription = document.querySelector('.editpage__preview-desription'); 
      if (previewDescription) {
        previewDescription.textContent = event.target.value; 
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
    formData.append('ad_id', context.ad.id);
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
      credentials: 'include',
      body: formData,
  };

  try {
      const response = fetch(BACKEND_URL + "/adedit", requestOptions)        
      .then(response => {
        if (response.status < 300) {
            location.href = "/company";
        } else {
            // Обработка ошибки
            return response.json();
        }})

  } catch (error) {
      console.log(error);
  }
  }

}

