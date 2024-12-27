const http = require("http");

const port = 8080;

const server = http.createServer((req, rest) => {
  if (req.url === "/home") {
    rest.writeHead(200, { "content-type": "text/html" });
    rest.end("<h1>hello world</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "joao",
        email: "joaosenha@gmail.com",
      },
        {
            name: "maria",
            email: "maria@gmail.com"
        }
    ];

    rest.writeHead(200, { "content-type": "application/json" });
    rest.end(JSON.stringify(users))
  }
});

server.listen(port, () => console.log(`Rodando em http://localhost:8080/home`));
