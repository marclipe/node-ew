const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click' //qualquer alteração que acontecer com esse evento ele vai printar
meuEmissor.on(nomeEvento, function(click) {
    console.log('um usuario clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function() {
//     meuEmissor.emit(nomeEvento, 'no ok' + count ++)
// }, 1000)

//process -> variavel interna do Node

const stdin = process.openStdin()
stdin.addListener('data', function(value) {
    console.log(`Você digitou ${value.toString().trim()}`)
})