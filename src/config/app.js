'use strict'
const https = require('https');
const fs = require('fs');



const express = require('express');
const helmet = require ('helmet');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000;

const customerRoutes = require('../routes/customers')

//configura el midleware del analisis
app.use(express.urlencoded({extended: false}));
//Crea la aplicacion express
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.use(cors())//Para hacer peticiones al navegador
app.use(helmet()); //inrtegracion de seguridad para el HTTP, que actua como un middleware en express


app.use('/customer', customerRoutes)
exports.initServer = ()=>{
    const server = https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app).listen(port, () => {
        console.log(`Server https running in port ${server.address().port}`)
    });
    return server; // Asegúrate de retornar el objeto del servidor
};
