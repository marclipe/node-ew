const service = require('./service'); 

async function main() {
    try {
        const results = await service.obterPessoas('a')
        // const names = []
        // results.results.forEach(element => {
        //     names.push(element.name)
        // });

        const names = results.results.map(function(pessoa) {
            //para cada item da lista ele vai retornar um pessoa.name
            return pessoa.name
        })

        console.log('names: ', names);
    } catch(error) {
        console.error(`DEU RUIM`, error)
    }
} 

main()

