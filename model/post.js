module.exports = {

        posts: [
        {
            id: '',
            title: '',
            description: ''
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost (title, description) {
        
        this.posts.push({ id: gerarID(), title, description}); //Inserir um novo elemento

    }

}

//FUNÇÃO PARA GERAR ID DO POST

function gerarID () {
    return Math.random().toString(36).substring(2, 9) // Vai gerar um numero aleatório, e usaremos a base de números e letras 36 (26 letras + 10 numeros) e que vai começar na posição 2 e vai pegar os outros 9 elementos
}
