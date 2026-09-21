let number = 2 ; 
let table = [1, 2, 2, 3, 2, 4];

let count = 0 ;
for(i in table){
    if (table[i] === number){
        count += 1;
    }
}
console.log(count);