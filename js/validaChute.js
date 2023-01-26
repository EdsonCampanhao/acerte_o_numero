
function validaChute(chute){
    const numero = +chute
    console.log(numero)
    if (testaFormato(numero)){
        elementoNumerofalado.innerHTML+='<p>Por favor, diga um número<p>'
    }
    if(chuteMaiorOuMenorPermitido(numero))
    { elementoNumerofalado.innerHTML+='<p>Valor fora do range<p>'
    }
}
function testaFormato(numero) {
    return Number.isNaN(numero)
}

function chuteMaiorOuMenorPermitido(numero){
        return numero>maiorValor||numero<menorValor
}