//Use routers to clean up the code.
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//Routes

const adminRoute = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use('/admin', adminRoute);
app.use('/shop',shopRoutes);


app.use((req, res) =>{
    res.status(404).send("<h1>Page Not Found!</h1>")
})


app.listen(PORT, ()=>{
    console.log(`server is listning on PORT: ${PORT}`)
});






















