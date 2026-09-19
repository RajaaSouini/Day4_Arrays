//Retirer une valeur d un tableau sans filter or splice
let table = [10 , 20 , 30 , 40 ];
let table2 = [];
let indice = 2 ;

for(i = 0 ; i < table.length ; i++){
    if ( i !== indice){
        table2[table2.length] = table[i];
    }
    
}
console.log(table2);

//mais il garde la meme taille !!!
console.log(table2.length);
