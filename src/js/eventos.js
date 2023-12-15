import * as el from './elementos.js';
import * as controls from './controls.js';
import { playflorest, playRain, playCoffeeShop, playFireplace } from './controlSounds.js';
import state from './state.js';

export function registerControls (){
    el.controls.addEventListener('click', (event)=>{
        const action = event.target.dataset.action
        
        if (typeof controls[action] != 'function') {
            return
        }

        controls[action]()
    })
    
}

export function audiosVariados() {
    el.playButtom1.addEventListener('click', playflorest)
    el.playButtom2.addEventListener('click', playRain)
    el.playButtom3.addEventListener('click', playCoffeeShop)
    el.playButtom4.addEventListener('click', playFireplace)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}