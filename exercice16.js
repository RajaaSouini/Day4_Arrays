//conserver le plus grand

let table = [3 , 9  , 1 , 7];
let max = table[0];

for (i in table){
    if(table[i] > max){
        max = table[i];
    }
}
console.log(max);