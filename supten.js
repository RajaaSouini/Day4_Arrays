let table = [1, 40 , 70 , 4 , 45 , 3 ];

let count = 0 ;
for (i = 0 ; i < table.length ; i++){
    if (table[i] > 10){
        count += 1;
    }
}

console.log(count);