import { buttonPress, cafeteria, chuva, floresta, lareira } from "./sounds.js";
import * as el from './elementos.js';

export function playflorest() {
    toggleMusic('1')
}

export function playRain() {
    toggleMusic('2')
}

export function playCoffeeShop() {
    toggleMusic('3')
}

export function playFireplace() {
   toggleMusic('4')
}

export function toggleMusic(numero) {
    const playButton = document.getElementById(`playButton${numero}`);
    console.log(playButton);
    
    playButton.style.backgroundColor = '#02799D'
    playButton.style.color = '#fff'

    el.cards.filter(card => {
        if (card != playButton) {
            card.style.backgroundColor = ''
            card.style.color = ''
        }
    })

    const music = getMusicByNumber(numero)

    // Pausa todas as outras músicas antes de iniciar a nova
    pauseAllMusic()


    if (music.paused) {
        music.play()
        music.loop = true
    }else{
        music.pause()
        music.currentTime = 0 // Reinicia a música para o início
        // Retorna a cor original do botão quando a música é pausada
    }

    buttonPress.play()
}

// Função para pausar todas as músicas, exceto a especificada
function pauseAllMusic() {
    const allMusic = [
        floresta,
        chuva,
        cafeteria,
        lareira
    ]

    allMusic.filter(otherMusic => {
        if(otherMusic != allMusic){
            otherMusic.pause()
            otherMusic.currentTime = 0
        }

    })
}

function getMusicByNumber(numero) {
    switch (numero) {
        case '1':
            return floresta
        case '2':
            return chuva
        case '3':
            return cafeteria
        case '4':
            return lareira
        default:
            return null
    }
}