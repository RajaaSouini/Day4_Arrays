//rotation manuelle
let table = [1 ,2 , 3 , 4 , 5];
let n = 5;
let m ;
for(j = 0 ; j < m ; j++){
    m = m% n ;
    
    let temp = table[0];

    for(i = 0 ; i < table.length-1 ; i ++){
        table[i] = table[i+1];
        
    }

    table[table.length -1] = temp;
    console.log(table)
}

console.log(table);





