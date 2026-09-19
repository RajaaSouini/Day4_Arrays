let table = [0 , 1 , 2 , 3 , 4 , 5 , 6 ];
let somme = 0;

for(i in table){
    if (i % 2 !== 0 ) continue;
    somme = somme + table[i];
}
console.log(somme);