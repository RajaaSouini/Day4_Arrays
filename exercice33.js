let table =[4, 9, 2, 9, 7];
let table2 = [];
let x;
for(i = 0 ; i<table.length ; i++){

    let exist = false;  

    for(j = 0 ; j< table2.length ; j++){
        if (table[i] === table2[j]){
            x = table[i];
            exist = true;
            break;
        }
    }
    if(!exist){
       table2.push(table[i]);
    }
}


let max = table2[0];
for (i in table2){
    if(table2[i] > max && table2[i] !== x){
        max = table2[i];
    }
}

console.log(max);