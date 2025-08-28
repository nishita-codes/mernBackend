const express = require("express");
const path =require("path");
const fs = require("fs");
const hbs = require("hbs");
const app = express();
require("./db/conn");
const register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json()); //perfect for postman
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
hbs.registerPartials(template_path);

app.get("/",(req,res) =>{
res.render("index")
});

app.get("/register",(req,res) =>{
res.render("register")
});

// create a new user in our database
app.post("/register", async (req,res) =>{
   try{
      
   }catch(error){
    res.status(400).send(error);
   }
});

app.listen(port , ()=>{
    console.log(`server is running at port on ${port}`);
}) 