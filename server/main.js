const http = require('http');

const routing = {
  'GET': [],
  'POST': [],
};

const types = {
  "undefined": (args, cb) => cb('not found'),
  "object": ([data, req, res], cb) => {
    const strData = JSON.stringify(data);
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    cb(strData);
  },
  "function": ([fn], cb) => {
    fn(req, res, cb);
  }
}

const serve = (data, req, res) => {
  const type = typeof data;
  if (type === "string") return res.end(data);

  const serializer = types[type];

  serializer([data, req, res], data => serve(data, req, res))
}

http.createServer((req, res) => {
  const data = routing[req.url];
  serve(data, req, res);
}).listen('3000');