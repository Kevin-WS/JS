// && - lógica "And" ou "e", que retorna verdaeiro se todos os operadores forem verdadeiros.

// || - Lógica "or" ou "ou", que retorna verdaeiro se pelo menos um operador for verdadeiro.

// ! - Lógica "not" ou "não", que retorna o valor lógico se é verdadeiro, retorna falso e se é falso retorna verdadeiro.
//2000
//sol
let dinheiros = 1500; 
let sol = true;

let praia1 = dinheiros >= 2000 && sol == true;
let praia2 = dinheiros >=5000 || sol == true;


console.log(`Vamos para a praia? ${praia2}`);
