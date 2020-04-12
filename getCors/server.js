const http = require('http');

const headers = {
  'access-control-allow-origin': '*', // 모든 공간에서의 접근 허용
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS', // 모든 메소드의 접근 허용
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'content-type': 'application-json'
};

http.createServer((request, response) => {
  let data = [{ 'name': 'socratone' }];
  if(request.method === 'GET' && request.url === '/get') { // GET이 호출 될 때 
    response.writeHead(200, headers); // 헤드에 허용해준다는 정보를 넣는다.
    response.write(JSON.stringify(data));
    response.end();
  } else if(request.url === '/') { // 서버가 실행될 때
    response.write('Server is running.');
    response.end(); 
  }
}).listen(300);