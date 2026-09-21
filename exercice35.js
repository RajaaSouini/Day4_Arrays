let table = [1, 2, 3, 4, 5, 6];
let tablePair = [];
let tableImpair = [];

for (i in table){
    if(table[i] % 2 === 0){
        tablePair.push(table[i]);
    }
}

for (i in table){
    if(table[i] % 2 !== 0){
        tableImpair.push(table[i]);
    }
}
console.log(tablePair , tableImpair);