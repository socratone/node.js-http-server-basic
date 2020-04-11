const http = require('http');

http.createServer((request, response) => {
  let data = [{ 'name': 'socratone' }];
  if(request.method === 'GET' && request.url === '/get') { // GET이 호출 될 때 
    response.writeHead(200, { 'content-type': 'application-json' });
    response.write(JSON.stringify(data));
    response.end();
  } else if (request.url === '/') { // 서버가 실행될 때
    response.write('Server is running.');
    response.end(); 
  }
}).listen(300);