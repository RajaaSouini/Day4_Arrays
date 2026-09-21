let table = [1, 2, 2, 3, 1, 4];
let table2 = [];

for(i = 0 ; i<table.length ; i++){

    let exist = false;

    for(j = 0 ; j< table2.length ; j++){
        if (table[i] === table2[j]){
            exist = true;
            break;
        }
    }
    if(!exist){
       table2.push(table[i]);
    }
}

console.log(table2);