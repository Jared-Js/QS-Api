'use strict'

const express = require('express');
const morgan = require ('morgan');
const helmet = require ('helmet');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000;

const customerRoutes = require('../routes/customers')

//configura el midleware del analisis
app.use(express.urlencoded({extended: false}));
//Crea la aplicacion express
app.use(express.json()); 
app.use(cors())//Para hacer peticiones al navegador
app.use(helmet()); //inrtegracion de seguridad para el HTTP, que actua como un middleware en express


app.use('/customer', customerRoutes)
exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server http running in port ${port}`)
};
