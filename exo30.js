
let arr = [1,3,5,2,7,6]

function contains(arr,value)
{
    for(let i=0;i<arr.length;i++ )
        if(arr[i]==value) return true

    return false
}


console.log(contains(arr,8))