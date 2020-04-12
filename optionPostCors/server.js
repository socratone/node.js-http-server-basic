const http = require('http');

const headers = {
  'access-control-allow-origin': '*', // 모든 공간에서의 접근 허용
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS', // 모든 메소드의 접근 허용
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'content-type': 'application-json'
};

// 다른 웹에서 접근할 때에는 OPTIONS에 먼저 들어가고
// writeHead에서 허가를 해줘야 다시 POST로 들어간다.
// POST로 들어갈 때에도 writeHead에서 허가를 해줘야
// CORS 설정에 막히지 않고 성공적으로 응답한다.

http.createServer((request, response) => {
  if(request.method === 'OPTIONS') {
    console.log('OPTIONS');
    response.writeHead(200, headers); // 헤드에 허용해준다는 정보를 넣는다.
    response.end();
  } else if(request.method === 'POST') { // POST가 호출 될 때
    console.log('POST');
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk); // body에 담았다가
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.writeHead(200, headers); // 헤드에 허용해준다는 정보를 넣는다. 이 위치에 들어가야 한다.
      response.write(body); // 보낸다.
      response.end();
    });
  } else if(request.url === '/') { // 서버가 실행될 때
    response.write('Server is running.');
    response.end(); 
  }
}).listen(300);