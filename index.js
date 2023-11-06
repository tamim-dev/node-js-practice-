var http = require("http");

http.createServer(function (req, res) {
    if (req.method == "GET" && req.url == "/tamim") {
        res.writeHead(200, { "Content-Type": "application.json" });
        res.end(
            JSON.stringify({
                data: [
                    { name: "Tamim", age: "20" },
                    { name: "Tamim", age: "20" },
                    { name: "Tamim", age: "20" },
                    { name: "Tamim", age: "20" },
                ],
            })
        );
    } else if(req.method == "POST" && req.url == "/tamim") {
        // res.writeHead(200, { "Content-Type": "application.json" });
        // res.end(
        //     JSON.stringify({
        //         data: [
        //             { name: "Sami", age: "20" },
        //             { name: "Sami", age: "20" },
        //             { name: "Sami", age: "20" },
        //             { name: "Sami", age: "20" },
        //         ],
        //     })
        // );
        req.on("data",function(chunk){
            console.log(JSON.parse(chunk).name);
        })
    }
}).listen(8000);
