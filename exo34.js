let arr_1 = [1,4,6,7]
let arr_2 = [1,2,5,7]

for(let i=0;i<arr_2.length;i++)
{
    if(arr_1.includes(arr_2[i])===false)
        arr_1.push(arr_2[i])
}

console.log(arr_1)

arr_1.sort()

console.log(arr_1)
