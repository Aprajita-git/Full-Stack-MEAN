const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen(8000, () => {
    console.log("Server is running in port 8000");
})