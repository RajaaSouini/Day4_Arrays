//la moyenne d un tableau sans le max 
let table = [3 , 6 , 3 , 8 , 9 , 5 ];
let somme = 0 ;
let moyene = 0;

let max = table[0];

for (i in table){
    if(table[i] > max){
        max = table[i];
    }
}

for (i in table){
    if(table[i] === max)continue;
    somme += table[i];
}
moyene = somme/(table.length-1)
console.log(moyene);

