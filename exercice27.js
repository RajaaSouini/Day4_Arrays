
let table = [1 ,2 , 3 ];
let table2 = [];
for(let i = 0 ; i < table.length ; i++){
    table2[i] = table[(table.length-1)-i];
}

console.log(table2);

