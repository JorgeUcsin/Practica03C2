const http = require("http");
const express = require("express");
const path = require("path");
const puerto = 3000;
const app = express();
const misRutas = require('./router/index'); //Requerimos las rutas


// Configuraciones
        //Configurar motor de vistas

        app.set('views engine', 'ejs') ; //Se le dice que ya instalamo js y este sera nuestro motor de vistas
        //Variable para controlar las vistas
        app.set('views', path.join(__dirname, 'views'));
        app.engine('html', require('ejs').renderFile);  //Tratalos como si fueran html

//Recursos publicos

app.use(express.static(path.join(__dirname, 'public')))



//router

app.use(misRutas);  //Aqui se le esta diciendo que use misRutas



app.listen(puerto, ()=>{

    console.log("Iniciando el Puerto");



})