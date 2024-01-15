const subArrayExists = (arr) => {
    const sumSet = new Set();
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];
        if (sum === 0 || sumSet.has(sum))
            return true;
 
        sumSet.add(sum);
    }
    return false;
}
 
const arr =  [-3, 2, 3, 1, 6];
if (subArrayExists(arr))
    console.log("Found a subarray with 0 sum");
else
    console.log("No Such Sub Array Exists!");