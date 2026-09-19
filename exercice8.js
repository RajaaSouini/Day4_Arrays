//construction d'un tableau avec une boucle
let table = [];

for(let i = 1 ; i <= 5 ; i++){
    let j = i;
    j = i ** 2;
    table.push(j);
}

console.log(table);