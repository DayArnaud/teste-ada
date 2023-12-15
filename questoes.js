//Dayane Arnaud Anadon Figueiredo id: 1087026

// Primeira questão:
let produto = 1;
let fator = 3;

while (fator <= 10) {
  produto *= fator;
  fator += 2;
}
console.log(`A alternativa correta da questão 1 é a letra C) ${produto}`);
// prod: 1*3=3 | fator: 3+2=5
// prod: 3*5=15 | fator: 5+2=7
// prod: 15*7=105 | fator: 7+2=9
// prod: 105*9=945 e fator: 9+2=11 break

// RESPOSTA CORRETA LETRA C) 945

///////////////////////////////////////////////////////////////////////////

// Segunda questão:
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
}
console.log(
  `Questão 2: a saída deste código no console é a letra B) conforme resultado ao executar no terminal`
);

///////////////////////////////////////////////////////////////////////////

// Terceira questão:
const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"];
const resultado = filtrarStringsCurtas(palavras, 5);

function filtrarStringsCurtas(strings, tamanhoMinimo) {
  return strings.filter((string) => string.length >= tamanhoMinimo);
}
console.log(
  `Após filtrar as strings com tamanho maior ou igual a 5, o resultado é: "${resultado}", e a alternativa correta é a letra C)`
);

/////////////////////////////////////////////////////////////////////////
