let arr = [1, 2, 2,2, 3,3,3, 1, 4]

function deleteDuplicates(arr)
{
    let newArr = []

    for(let i=0;i<arr.length;i++)
        if(newArr.includes(arr[i])===false)
            newArr.push(arr[i])

    return newArr
}

function deletebyindex(arr,index)
{
    for(let i=index;i<arr.length-1;i++)
        arr[i]=arr[i+1]

    arr.pop()
}

function deleteDuplicates_2(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;)
        {
            if(arr[i]===arr[j]){
                deletebyindex(arr,j)
                
            }
            else j++
        }

    }
}

deleteDuplicates_2(arr)
console.log(arr)