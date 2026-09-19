//echangeons le premier et le dernier element d un tbleau
let table = [1 ,2 ,3 ,4];

let a = table.shift();
let b = table.pop();
let c ; 
c = a;
a = b ;
b = c;
table.unshift(a);
table.push(b);

console.log(table);

/*

let a, b;

for(i in table){
    if (i === 0){
        a = table[i];
    }
    if (i === table.length-1){
        b = table[table.length-1]
    }
    let c = a;
    a = b ;
    b = c;
}

console.log(table);*/

/*
let a  = table[0];
let b = table[table.length-1];
let c ;

c = a;
a = b ;
b = c; */

