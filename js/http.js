var http = require("http")
http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("We can use Node to create a server")
    res.end()
}).listen(8080)