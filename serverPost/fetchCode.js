var message = { username: 'socratone', text: 'hello' };

fetch('http://localhost:300', {
  method: 'POST',
  body: JSON.stringify(message),
  headers: {
    'content-type': 'application/json'
  }
}).then(response => response.json())
  .then(json => console.log(json));