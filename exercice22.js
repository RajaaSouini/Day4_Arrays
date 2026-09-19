let table = [4, 9, 2, 9, 1];

let max = table[0];
let j;
for(i in table){
    if(table[i] > max){
        max = table[i];
        j = i;
    }
}
console.log(j);