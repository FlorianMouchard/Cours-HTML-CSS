// JavaScript source code
const date = new Date();
console.log(date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
}));