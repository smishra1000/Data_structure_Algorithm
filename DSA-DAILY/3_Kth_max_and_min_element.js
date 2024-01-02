//  return K'th smallest element in a given array
const kthSamllest = (arr,n,k)=>{
     // Sort the given array
    arr.sort((a,b)=>{
        return a-b;
    })
    // Return k'th element in the sorted array
    return arr[k-1];
}

let arr = [20,10,5,40,50];
let result = kthSamllest(arr,arr.length,2);
console.log(result)