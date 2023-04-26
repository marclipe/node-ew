const {obterPessoas} = require('./service')

async function main() {
    try {
        const {results} = await obterPessoas('a') 
        //pegar o peso de cada pessoa
        const alturas = results.map((item) => parseInt(item.height)); 
        console.log("alturas", alturas);

        const total = alturas.reduce((anterior, proximo) => {
          return anterior + proximo;
        });

        console.log(total)
    } catch(error) {
        console.error('DEU RUIM', error)
    }
}

main()