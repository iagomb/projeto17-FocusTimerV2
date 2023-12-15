import { audiosVariados, registerControls, updateDisplay } from "./eventos.js";

export function start(){
    registerControls()
    audiosVariados()
    updateDisplay()
}