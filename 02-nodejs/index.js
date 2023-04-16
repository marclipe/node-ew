/*
0- Obter um usuário 
1- Obter o número de telefone de um usuário a partir de seu Id
2- Obter o endereço do usuário pelo Id 
*/
function obterUsuario(callback) {
    setTimeout(function() {
        //primeiro
        return callback(null, {
            id: 1, 
            nome: 'Aladin', 
            dataNascimento: new Date()
        })
    }, 1000)
}

//callback é o último parâmetro
function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002', 
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos', 
            numero: 0
        })
    }, 2000)
}

//Preciso retornar o valor do usuário
//erro e sucesso
function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    //null || "" | 0 === false
    if (error) {
        console.log('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.log('DEU RUIM em TELEFONE', error)
            return;
        } 
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
              console.log("DEU RUIM em ENDEREÇO", error);
              return;
            } 

            console.log(`
                Nome: ${usuario.nome}, 
                Endereço: ${endereco.rua}, ${endereco.numero}, 
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})

//Preciso de função para ser chamada após tudo que foi executado em segundo plano
// const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco()

// console.log('usuario', usuario)
// console.log('telefone', telefone)