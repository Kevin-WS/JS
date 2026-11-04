let H1 = window.document.getElementById('titulo');
H1.style.color = 'lightblue'
H1.innerHTML = 'Me ajuda'

let Listo = window.document.getElementsByClassName('lista');
// Listo[1].innerHTML = 'NADA';
Listo[0].style.color = 'red';

for (let num = 0 ; num < Listo.length; num++) {
    Listo[num].style.color = 'red'
}

let paragrafo = window.document.getElementsByTagName('p');
paragrafo[0].style.color = 'lightgreen'