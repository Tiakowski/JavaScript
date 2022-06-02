function barulho(IdAudio) {
    const elemento =  document.querySelector(IdAudio);

    if (elemento && elemento.localName === "audio" ) {
            elemento.play();
        }
    else {
        console.log('Elemento nulo');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    

    const tecla = ListaDeTeclas[contador]
    const sonoplastia = tecla.classList[1];
    
    const AudioSelecionado = `#som_${sonoplastia}`

    tecla.onclick = function () {
        barulho(AudioSelecionado)
    };

    tecla.onkeydown = function (event) {
        if (event.code == 'Space' || event.code == 'Enter') {
        tecla.classList.add('ativa')
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
