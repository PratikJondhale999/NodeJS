const express = require("express"); //Here Express is require.
const users = require('./MOCK_DATA.json');  // "./" means current directory.
const fs = require("fs"); //fs module is included for file handling


 const app = express();  //app is created means instance is creted.

//Api Middleware - IT i like a plugin

app.use(express.urlencoded({extended: false}));

//Custom Middleware
app.use((req,res,next) => {   //Here next is refernce of next Middleware in the stack
    console.log("Hello from middleware 1");
    next(); //To forward request ahed we just call next() function.
});  






//Routes 

app.get('/users',(req,res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join} //Users are taken dynamically and string is return First_name of user
    </ul>
    `;
    res.send(html);
    
});


app.get('/api/users',(req,res) => {
    return res.json(users) //Here we are working with json //It will give response as all user.
});

app.get('/api/users/:id',(req,res) => { //:id is Dynamic id // :id is a veriable.
        const id = Number(req.params.id); //Here we get the id
        const user = users.find((user) => user.id === id); //Here we find user which has user.id = id(input).
        return res.json(user); //Here we are sending JSON file so res.JSON //If it is text will do res.send


});

app.post('/api/users', (req,res) => {
    const body = req.body;
    users.push({...body,id: users.lendth +1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        return res.json({status:"success", id : users.length})
    });
    
    
    // console.log(body);
    
});



 app.listen(8009,() => console.log("Server started!")); //Port is defined.

