
const menorValor=1;
const maiorValor=1000;
const numeroSorteado=gerarNumero();
const elementoNumerofalado=document.getElementById('chute')

console.log(numeroSorteado)

const elementoMenorValor=document.getElementById('menor-valor');
elementoMenorValor.innerHTML=menorValor

const elementoMaiorValor=document.getElementById('maior-valor');
elementoMaiorValor.innerHTML=maiorValor


function gerarNumero(){
    return Math.trunc(Math.random()*maiorValor+1)
}