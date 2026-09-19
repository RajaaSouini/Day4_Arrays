//inserer dans un tableau sans splice()

let table = [1, 2 , 4 , 5];
let indic = 1 ;
let table2 = [];

for(i = 0 ; i < table.length ; i++){
    table2[table2.length] = table[i];
    if (i === indic){
        table2[table2.length] = 3 ;
    }

}
console.log(table2);
