const http = require('http');
const fs = require('fs');
const debug = require('debug');

const SERVER_PORT = 80;

const page404 = fs.readFileSync('./public/index.html');

const server = http.createServer((request, response) => {
  const {url} = request;
  debug.log('url: ' + url);
  const normUrl = !url.includes('.') ? '/index.html' : url;
  let filepath;
  if (fs.existsSync('./public' + normUrl)) filepath = './public' + normUrl;
  else if (fs.existsSync('./static' + normUrl)) filepath = './static' + normUrl;
  else if (fs.existsSync('./node_modules' + normUrl)) {
    filepath = './node_modules' + normUrl;
  } else {
    debug.log('error: Not found : ' + normUrl);
    response.write(page404);
    response.end();
    return;
  }

  if (filepath.endsWith('.js')) {
    response.setHeader('Content-Type', 'application/javascript');
  }
  debug.log('filepath: ' + filepath);
  fs.readFile(filepath, (err, data) => {
    if (err) {
      debug.log('error: ' + JSON.stringify(err));
      response.write(page404);
      response.end();
      return;
    }

    response.write(data);
    response.end();
  });

  if (url === '/ping') {
    fetch('http://84.23.53.167:8080/api/v1/ping')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка: ' + response.status);
          }
          // console.log(response.json())
          return response.json();
        })
        .then((data) => {
          jsonData = data;
          console.log(jsonData);
        })
        .catch((error) => {
          console.error('Произошла ошибка при запросе /ping:', error);
        });
  }
});

debug.log(`Starting server at port ${SERVER_PORT}`);
server.listen(SERVER_PORT);

