// index.js  http://127.0.0.1:8000

const http = require('http');
const urllib = require('url');

const port = 8000;

http.createServer(function (req, res) {
    // 开启Cors
    res.writeHead(200, {
        //设置允许跨域的域名，也可设置*允许所有域名
        'Access-Control-Allow-Origin': '*',
        //跨域允许的请求方法，也可设置*允许所有方法
        "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
        //允许的header类型
        'Access-Control-Allow-Headers': 'Content-Type'
    })
    const { query: { name, age } } = urllib.parse(req.url, true);
    res.end(`${name}今年${age}岁啦！！！`);
}).listen(port, function () {
    console.log('server is listening on port ' + port);
})
