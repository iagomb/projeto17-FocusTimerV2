import state from './state.js';
import * as el from './elementos.js';
import * as timer from './timer.js';
import { updateDisplay } from './eventos.js';
import { buttonPress } from './sounds.js';

export function toggleRunning() {
    state.isRunning = el.html.classList.toggle('running');
    timer.countDown()

    buttonPress.play()
}

export function reset() {
    state.isRunning = false;
    el.html.classList.remove('running');
    updateDisplay()
    
    buttonPress.play()
}

export function countUp() {
    timer.countSumFive()
    buttonPress.play()
}
export function countDown() {
    timer.countSubFive()
    buttonPress.play()
}



