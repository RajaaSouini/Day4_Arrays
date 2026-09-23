let T = [4,15,8,23,1]
let limit = 5


function getAboveLimit(T,limit)
{
    let res = []
    for(let i=0;i<T.length;i++)
        if(T[i]>limit)
            res.push(T[i])
    
    return res

}


console.log(getAboveLimit(T,limit))