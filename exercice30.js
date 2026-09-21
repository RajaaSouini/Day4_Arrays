let table = [1, 2, 2, 3, 2, 4];
let exist = false;
let a = 7;
for (i in table){
    if(table[i] === a){
        exist = true;
    }
}

console.log(exist)