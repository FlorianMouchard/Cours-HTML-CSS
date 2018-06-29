// JavaScript source code
let compteur = 0;
let timer = setInterval(show, 1000);

function show() {
    console.log('coucou');
    compteur++;
    if (compteur == 3) {
        clearInterval(timer);
    }
}



