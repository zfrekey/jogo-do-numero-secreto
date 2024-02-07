// let listaDeNumerosSorteados = []
// let numeroLimite = 3;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemDoJogo(){
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`); 
// }

// exibirMensagemDoJogo();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
    
//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1', 'Acertou');
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`
//         exibirTextoNaTela('p', mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//         document.getElementById('chutar').setAttribute('disabled', true);
//     } else {
//         if (chute > numeroSecreto){
//             exibirTextoNaTela('p', 'O número secreto é menor que o chute');
//         } else {
//             exibirTextoNaTela('p', 'O número secreto é maior que o chute');
//         }
//     tentativas ++
//     limparCampo()
//     }
// }

// function gerarNumeroAleatorio () {
//     let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
//     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lenght;

//     if (quantidadeDeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }

//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados);
//         return numeroEscolhido;
//     }
// }


// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemDoJogo();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
//     document.getElementById('chutar').removeAttribute('disabled');
//     console.log(numeroSecreto)
// }

let listaDeNumerosSorteados = [];
let numeroLimite = 4;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}