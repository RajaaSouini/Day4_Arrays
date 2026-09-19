//minimum d un tableau 
let table = [3 , 9 , 1 , 7 ];
let min = table[table.length-1];
for(i = table.length-1 ; i > 0 ; i --){
    if (table[i] < min){
        min = table[i]
    }
}
console.log(min)