let arr = [3, 7, 3, 9, 3, 9, 7, 7]
let v = 7


function findAllIndex(arr,v)
{
    let res = []
    for(let i=0;i<arr.length;i++)
        if(arr[i]===v) res.push(i)

    return res
}

console.log(findAllIndex(arr,v))