function barulho(IdAudio) {
    document.querySelector(IdAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador]
    const sonoplastia = tecla.classList[1];
    
    const AudioSelecionado = `#som_${sonoplastia}`

    tecla.onclick = function () {
        barulho(AudioSelecionado)
    };

}
