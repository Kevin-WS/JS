let uniJogos = ['Hollow Knight', 'GTA V', 'MHW', 'Peak']

console.log(uniJogos[1]);
console.log(uniJogos[3]);


console.log('=========================');


let bidJogos = [
    ['Marco','Lucas','Kevin'],
    ['Overcooked','Battlefield','MHW'],
    ['7','5','10'],
]


console.log(bidJogos);


let nRemovido = bidJogos[0].pop();
let jRemovido = bidJogos[1].pop();
let tRemovido = bidJogos[2].pop();

console.log(nRemovido+jRemovido+tRemovido);


let bidAddN = bidJogos[0].push('Igor')
let bidAddJ = bidJogos[1].push('Fortnite')
let bidAddT = bidJogos[2].push('4')

console.log(bidJogos[0]);

