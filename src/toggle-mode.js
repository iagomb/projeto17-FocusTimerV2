let darkMode = true;

const buttonToggle = document.querySelector('#toggle-mode');

buttonToggle.addEventListener('click', event => {
    // o documentElement é o proprio html e o toggle retorna um boolean
    document.documentElement.classList.toggle('light')

    // logica para trocar o texto do span na acessibilidade
    const mode = darkMode ? 'light' : 'dark';

    event.currentTarget.querySelector('span').innerText = `${mode} mode ativado`;

    // estou negando a variaval booleana para false
    darkMode = !darkMode
})