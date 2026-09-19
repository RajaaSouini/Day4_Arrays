let table = [3 , 6 , 3 , 8 , 9 , 5 ];
let min = table[table.length-1];
for(i = table.length-1 ; i > 0 ; i --){
    if (table[i] < min){
        min = table[i]
    }
}

let max = table[0];

for (i in table){
    if(table[i] > max){
        max = table[i];
    }
}

let result = max-min;
console.log(result);


/*


let n = 15 ;

for(i = 1 ; i<= n ; i++){
    if (n % i === 0){
        console.log(i)
    }
} 

let a = 20

for(i = a ; i > 0 ; i--){
    let row = "";
    for (j = 0 ; j< i ; j++){
        row += "*";
    }
    console.log(row);
}*/