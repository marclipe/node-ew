const axios = require('axios')
const URL = `https://swapi.dev/api/people`;

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url) /*é uma Promise então passo o await*/
    return response.data
}

/*Exportando no Node*/
module.exports = {
    obterPessoas
}