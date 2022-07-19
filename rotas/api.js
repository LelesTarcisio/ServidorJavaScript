//CRIAÇÃO DAS ROTAS: PARA LER OS DADOS (GET) E OUTRA PARA SALVAR UM NOVO DADO (POST)

const express = require('express');  
const router = express.Router()
const bodyParser = require('body-parser');  //Facilita em pegar os dados das requisições
const cors = require ('cors');
const posts = require ('../model/post');

const options = {
    origin: 'http://localhost:3000' // WHITE LIST
}

//Retornar todos os Posts disponíveis

router.use(cors(options));

router.get('/all', (req, res) => { 

    res.json(JSON.stringify(posts.getAll()))

}); 

// Gerar novo Post

router.post('/new', bodyParser.json(), (req, res) => { 

    
    let title = req.body.title; // Para ter acesso ao title temos que acionar o bodyParser como Middleware
    let description = req.body.description;

    posts.newPost (title, description)

    res.send("Post adicionado");
});

module.exports = router