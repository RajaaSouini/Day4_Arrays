const arr = [1 , 2];
// il n y a pas un probleme dans le push car on a pas modifier la constante
//on a juste ajouter à la fin du tableau un élément
arr.push(3);



//mais dans ce cas on a affecté une autre valeur à
//  la constante arr ce qui va empecher un probleme
//arr = [4 ,5];
console.log(arr);