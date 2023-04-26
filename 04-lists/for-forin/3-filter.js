const {obterPessoas} = require('./service') //Para ser bem especifico 

/*const item = {
    name: 'MarcLipe', 
    idade: 22,
}

const { nome, idade } = item
console.log(nome, idade)
*/ 

async function main() {
    try {
        const {results} = await obterPessoas('a')
        const familiaLars = results.filter(function(item) {
            //por padrão precisa retornar um booleano 
            //para informar se deve manter ou remover da lista
            //false -> remove da lista 
            //true -> mantém
            // encontrou = posicaoNoArray
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    } catch(error) {
        console.error('DEU RUIM', error)
    }
}

main()