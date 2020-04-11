const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST') { // POST가 호출 될 때
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk); // body에 담았다가
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.write(body); // 보낸다.
      response.end();
    });
  } else if (request.url === '/') { // 서버가 실행될 때
    response.write('Server is running.');
    response.end(); 
  }
}).listen(300);