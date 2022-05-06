"use strict";
let arr = [10, 20, 30, 40];
//for: quando já sabe a quantidade de repetições
console.log('for interativo');
for (var val of arr) {
    console.log(`${val}`);
}
console.log('for indexado');
for (let i = 0; i < arr.length; i++) {
    console.log(`posição ${i} valor ${arr[i]}`);
}
//While: laço de repetição (não sabe o núemro de execução)
var x;
x = 0;
while (x < 10) {
    console.log(`execução ${x}`);
    x++;
}
//do while: faz o teste no final(quando precisa executar pelo menos uma vez)
var y = 0;
do {
    console.log(`execução ${y}`);
    y++;
} while (y < 10);
