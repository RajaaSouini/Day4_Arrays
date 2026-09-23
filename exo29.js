let arr = [1,3, 2, 2, 3, 2, 1, 4]

function getAllOcc(arr)
{
    let pastElem = []
  
    for(let i=0;i<arr.length;i++){
      console.log(i,pastElem)
      if(!pastElem.includes(arr[i])){
        pastElem.push(arr[i])
        console.log(`${arr[i]}: ${getOcc(arr,arr[i])}`)
      }
        
    }
}

function getOcc(arr,v)
{
    let count = 0
    for(let i=0;i<arr.length;i++)
        if(arr[i]===v) count ++

    return count
}

getAllOcc(arr)