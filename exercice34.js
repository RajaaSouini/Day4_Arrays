let table = [1, 2, 3];
let table2 = [3, 4, 5];

let table3 = [];

for(i in table2){
    table.push(table2[i]);
}

for(i = 0 ; i<table.length ; i++){

    let exist = false;

    for(j = 0 ; j< table3.length ; j++){
        if (table[i] === table3[j]){
            exist = true;
            break;
        }
    }
    if(!exist){
       table3.push(table[i]);
    }
}

console.log(table3);