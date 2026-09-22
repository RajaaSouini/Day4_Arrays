//la moyenne d un tableau sans le max 
let table = [3 , 6 , 3 , 8 , 9 , 5 ];
let somme = 0 ;
let moyene = 0;

let max = table[0];

for (i in table){
    if(table[i] > max){
        max = table[i];
    }
    somme+= table[i];
}

moyene = (somme - max)/table

console.log(max)