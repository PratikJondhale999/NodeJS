const express = require('express');
//const path = require('path');

const app = express(); //This is our app or instance of express.

//Api Middelwares


app.use(express.json()); //this is used to accept the data in json format.


app.use(express.urlencoded({extended : true})); //this is basically to decode the data send through html form

// app.use(express.static('public'));

 

//API ROUTES

app.get('/form' ,(req,res)=> {
    res.sendFile('C:/Users/Pratik.Jondhale/Desktop/NodeJS/project-01/index.html');
});

app.post('/formPost',(req,res) => {
        console.log(req.body); //Data we get from HTML From is in the body request
});





// This is Basically  to listen on port.
app.listen(8000,() => console.log("Server has started!!")); //




