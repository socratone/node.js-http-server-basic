fetch('http://localhost:300/get')
  .then(response => response.json())
  .then(json => console.log(json));