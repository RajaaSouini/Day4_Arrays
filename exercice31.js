let table = [3, 7, 3, 9, 3];

let table2 = [];

for (i = 0 ; i< table.length ; i++) {
    if (table[i] === 3) {
        table2.push(i);
    }
}

console.log(table2);
