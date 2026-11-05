let num = [2, 4, 5, 6]

let novos = num.map ((num)=> {
    return num*2
})

let numeros = num.map((valores)=> {
    valores + 1
})

console.log(num);
console.log(novos);
console.log(numeros);

let idade = [17, 16, 20 ,21]

let menores = idade.filter((menor) => {
    return menor < 18
})

console.log(idade);
console.log(menores);
