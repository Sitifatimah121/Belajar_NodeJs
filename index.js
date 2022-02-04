const http = require('http');
const fs = require('fs');
const PORT = 8080;

const onRequest = (request, response) => {
    response.writeHead(200,{ "Content-Type": "text/html"})
    fs.readFile("./index.html", null, (error, data) => {
        if(error){
            response.writeHead(404)
            response.write("file not found")
        }else{
            response.write(data)
        }
        response.end()
    }); 
} 

const onJson = (request, response) => {
    response.writeHead(200, { "Content-Type": "application/json"})
    const data = {
        name:"Ima",
        age:"21"
    }
    response.end(JSON.stringify(data))
}


console.log(`server running in PORT ${PORT}`);
http.createServer(onRequest).listen(PORT);