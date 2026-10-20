console.log("Jovem pode votar: ");

const voto = 16;
let idade = 71;


// if (idade>=voto) {
//     console.log("No");
// } else {
//     console.log("Ba"); 
// }
// console.log((`Fim.`));


if (idade>=16 && idade<=70) {
    console.log("Pessoa, pode votar");
    
} else if (idade > 70) {
    console.log("Voto optativo!");
} else {
    console.log("Nao pode votar");
}