const express = require("express");

const router = express.Router();

router.get('/add-product', (req,res)=>{
    res.send('<body><form action="/admin/product" method="POST">Title<input type="text" name="title"><br>Size<input type="number" name="size"><br><button type="submit">AddProduct</button></form></body>')
})

router.post('/product',(req, res) =>{
    console.log(req.body);
    res.redirect('/shop')
})

module.exports = router;

