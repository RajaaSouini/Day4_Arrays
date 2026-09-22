let table = [10 , 20 , 30 , 40 , 50];
let table2 = []; 
let elem = 30 ;
let index ;

for (i = 0 ; i< table.length ; i++){
    if (table[i] === elem){
        index = i;
        break;
    }
}

console.log(index);




for (let i = 0; i < table.length; i++) {
  
  if (table[i] !== cible) {
   
    nouveauTableau[nouveauTableau.length] = table[i];
  }
}

console.log(nouveauTableau);
