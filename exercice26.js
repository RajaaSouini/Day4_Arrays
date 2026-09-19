let table = [1, 2, 3, 4, 5, 6];

let count = 0;

for(i in table){
    if (table[i] % 2 === 0){
        count += 1 ;
    }
}
console.log(count);