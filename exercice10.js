//Retirer une valeur d un tableau sans filter or splice
let table = [10 , 20 , 30 , 40 ];
let table2 = [];
let elem = 30;

for(i = 0 ; i < table.length ; i++){
    if ( table[i] !== elem){
        table2[table2.length] = table[i];
    }
    
}
console.log(table2);


console.log(table2.length);
