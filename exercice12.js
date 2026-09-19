//rotation manuelle
let table = [1 ,2 , 3 ,4 , 5];
let table2 = [];
for(let i = 0 ; i <= table.length ; i++){
    table2[i] = table[table.length-i];
}

console.log(table2);