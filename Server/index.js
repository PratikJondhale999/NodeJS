  //const http = require("http"); //Here http is an build package to make the server.
  //const fs = require("fs"); //fs Package is require.
  //const url = require("url"); //
  const express = require("express");

  const app = express();  //This Handler function //app is one of handler function which internally handels the req,res 

  // function myHandler(req,res){
    
  //     if(req.url === "/favicon.ico") return res.end();{
  //     const log = `${Date.now()}: ${req.method} ${req.url} Request recived\n`;
  //     const myurl = url.parse(req.url,true); 
     
  //     fs.appendFile('log.txt',log,(err,data) => {
  
  
  //         switch(myurl.pathname) {
  
  //             case '/' :
  //               if (req.method === "GET") res.end("Home Page");
  //             break;
  
  //             case '/about': 
  //             const username = myurl.query.myname
  //             res.end(`Hey ,${username}`);
  //             break;
  
  //             case '/signup':
  //               if(req.method === "GET") res.end('This is a sign up page');
  //               else if(req.method === "POST") {
  //                   //DB Query
  //                   res.end("Success");
  //               }
  
                
  
  
  //             default:
  //                 res.end("404 Not Found");
  //         }
          
  //     });
      
  //   };
  // }

  // Here ('/') -> means home page
  app.get('/', (req,res) => { // (req,res) => {} this function is only for '/' this route get method.
    return res.send("Hello from home page");



  });

  app.get('/about', (req,res) => { // (req,res) => {} this function is only for '/' this route get method.
    return res.send("From about Page" + " " +"Hey" + " " +  req.query.name + req.query.age);



  });

 
 
  app.listen(8000, () => console.log("Server Started!"));
  
  // const server =  http.createServer (app);//Here createServer function is used for making server whic has to give two para in callback function req,res.console.log(req);
  // server.listen(8001,() => console.log('server started')); //Here we define the port no on which server is going to run.



