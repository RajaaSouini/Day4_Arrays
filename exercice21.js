let table = [4 , 7 , 9 , 6 , 9 , 5];
let somme = 0;

for(i in table){
    somme += table[i];
}
let result = somme / table.length;

console.log(Math.round(result * 100)/100);

