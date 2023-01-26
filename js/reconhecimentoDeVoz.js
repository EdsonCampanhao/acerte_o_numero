const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript

    if (chute < numeroSorteado) {
    elementoNumerofalado.innerHTML = `<div id="chute" class="mensagem">
    <div>Você disse:</div>
    <span class="box">${chute}</span>
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div></div >`
    }else if(chute > numeroSorteado){
        elementoNumerofalado.innerHTML = `<div id="chute" class="mensagem">
        <div>Você disse:</div>
        <span class="box">${chute}</span>
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div></div >`

    }else if(chute == numeroSorteado){
        elementoNumerofalado.parentElement.innerHTML = `<div id="chute" class="mensagem">
        
        
        <h3 class='congrulation'>Parabéns você acertou, o número era ${numeroSorteado}</h3>
        <button class='new_game' id='new_game'> jogar novamente </button>
        `
        let buttonNewGame=document.getElementById('new_game');
        buttonNewGame.addEventListener('click',()=>location.reload())
       
    } 
    else if(chute.includes('game over')){
        elementoNumerofalado.parentElement.innerHTML =`<div class='game-over__screen'>
        <h3 class='game_over'> GAME OVER! </h3>
        <button class='new_game' id='new_game'> jogar novamente </button>
        </div>`
        let buttonNewGame=document.getElementById('new_game');
        buttonNewGame.addEventListener('click',()=>location.reload())
        
    }else if(!testaFormato(chute)){
        elementoNumerofalado.innerHTML = `<div id="chute" class="mensagem">
        <div>Você disse:</div>
        <span class="box">${chute}</span>`
        validaChute(chute)
    }
}
recognition.addEventListener('end',()=>recognition.start())
