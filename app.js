const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors")
const app = express();
const ejs = require('ejs')

app.use(cors);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');

//router home
app.get("/",(req,res)=>{
    res.render('./views/home.ejs')
})
app.get("/customers", (req, res) => {
    
});

//router register
app.get("/customers/register", (req, res) => {
    
});
app.post("/customers/register", (req, res) => {
    
});

//router edit profile
app.get("/customers/:idCustomer/editProfile", (req, res) => {
    
});
app.post("/customers/:idCustomer/editProfile", (req, res) => {
    
});

//router account
app.get("/customers/:idCustomer/accounts", (req, res) => {
    
});
app.post("/customers/:idCustomer/accounts", (req, res) => {
    
});

//router account
app.get("/customers/:idCustomer/accounts/:idAccount/transfer", (req, res) => {
    
});
app.get("/customers/:idCustomer/accounts/:idAccount/transfer", (req, res) => {
    
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});