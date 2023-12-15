import state from './state.js';
import * as el from './elementos.js';
import { updateDisplay } from './eventos.js';
import { kichenTimer } from './sounds.js';
import { reset } from './controls.js';

export function countDown() {
    clearTimeout(state.countDownId)
    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent )
    let seconds = Number(el.seconds.textContent)

    seconds--
    
    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes< 0){
        kichenTimer.play()
        reset()
        return
    }

    updateDisplay(minutes, seconds)
    
    state.countDownId = setTimeout(countDown, 1000)
}

export function countSumFive() {

    let minutes = Number(el.minutes.textContent)
    
    if (minutes >= 0 ) {
        minutes += 5
    }

    updateDisplay(minutes)
}
export function countSubFive() {
    let minutes = Number(el.minutes.textContent)
    
    if (minutes > 0 ) {
        minutes -= 5
    }

    updateDisplay(minutes)
}