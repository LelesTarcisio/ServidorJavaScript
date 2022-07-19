const PORT = 3000
const express = require('express');  //IMPORTAÇÃO e INSTALAÇÃO DO NODE EXPRESS (npm install express body-parser)
const apiRoute = require ('./rotas/api')

const path = require ('path');

//CRIAÇÃO DA APLICAÇÃO

const app = express();

app.use ('/api', apiRoute )
app.use ('/', express.static(path.join(__dirname, 'Public'))) //Mandar a pasta Public para o usuário

app.listen(PORT, () => {
    console.log(`Server runnning on port: ${PORT}`) // Porta que o servidor irá escutar
})






