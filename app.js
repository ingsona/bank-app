const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors")
const app = express();

app.use(cors);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//router home
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});