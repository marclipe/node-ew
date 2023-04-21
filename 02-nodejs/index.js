/*
0- Obter um usuário 
1- Obter o número de telefone de um usuário a partir de seu Id
2- Obter o endereço do usuário pelo Id 
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    //problema -> reject(ERRO)
    //quando sucesso -> resolve
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
        //   return reject(new Error('DEU RUIM DE VERDADE!'))
          return resolve({
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
          });
        }, 1000);
    })
}

//callback é o último parâmetro
function obterTelefone(idUsuario) {
        return new Promise(function resolverPromise(resolve, reject) {
            setTimeout(() => {
            return resolve({
                telefone: '1199002', 
                ddd: 11
            })
        }, 2000)
    })   
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos', 
            numero: 0
        })
    }, 2000)
}

const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos a função .them
//para manipular erros, usamos o .catch 
//usuario -> telefone -> telefone
usuarioPromise
    .then(function(usuario) {
        //vai capturar o usuario e devolver o telefone também 
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result) {
            return {
                usuario: {
                    nome: usuario.nome, 
                    id: usuario.id
                }, 
                telefone: result
            }
        })
    })
    .then(function(resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco
        .then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario, 
                telefone: resultado.telefone, 
                endereco: result
            }
        })
    })
    .then(function(resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.error('DEU RUIM', error)
    })

// obterUsuario(function resolverUsuario(error, usuario){
//     //null || "" | 0 === false
//     if (error) {
//         console.log('DEU RUIM em USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.log('DEU RUIM em TELEFONE', error)
//             return;
//         } 
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//               console.log("DEU RUIM em ENDEREÇO", error);
//               return;
//             } 

//             console.log(`
//                 Nome: ${usuario.nome}, 
//                 Endereço: ${endereco.rua}, ${endereco.numero}, 
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })