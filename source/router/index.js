const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Trabajando Servidor")
    })


    router.get('/index', (req,res)=> {
        res.render('index.html', {titulo:'Index'})
    });

    router.get('*',(req,res)=>{
        res.send("No existe la pagina")

    })

    module.exports=router;
   
