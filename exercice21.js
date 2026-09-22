let table = [4 , 7 , 9 , 6 , 9 , 5];
let somme = 0;

for(i in table){
    somme += table[i];
}
let result = somme / table.length;
let result2 = result * 100 ;
let intResult = parseInt(result2);

//console.log(Math.round(result * 100)/100);

//faire le role de Math.round(result * 100)/100  manuellement 

console.log(intResult/100);

