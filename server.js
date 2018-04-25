// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var port = process.env.PORT || 3300;

server.use(jsonServer.bodyParser);

// custom routes
server.post("/login", function(req, res) {
  if(req.body.login === "student" && req.body.password === "secret") {
  return res.json({
    name: "student",
    access_token: "3A364F68DA5745EB653457A585678"
  });
    
  }

  if(req.body.login === "admin" && req.body.password === "bigsecret") {
  return res.json({
    name: "admin",
    access_token: "3A364F68DA5745EB653457A588765"
  });
}

res.sendStatus(401);


});

server.use(middlewares)
server.use(router)



server.listen(port, () => {
  console.log("Mock server listening on port " + port);
  console.log("Press CTRL+C to stop server");
})
