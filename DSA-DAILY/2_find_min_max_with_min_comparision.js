function getMinMax(arr){
     
    let n = arr.length
    let mx,mn,i
     
    // If array has even number of elements then 
    // initialize the first two elements as minimum 
    // and maximum 
    if(n % 2 == 0){
        if (arr[0] > arr[1]) {
            mx = arr[0];
            mn = arr[1];
        } else {
            mx = arr[1];
            mn = arr[0];
        }
         
        // set the starting index for loop 
        i = 2
    }
         
    // If array has odd number of elements then 
    // initialize the first element as minimum 
    // and maximum 
    else{
        mx = mn = arr[0]
         
        // set the starting index for loop 
        i = 1
    }
         
    // In the while loop, pick elements in pair and 
    // compare the pair with max and min so far 
    while(i < n - 1){
        if(arr[i] < arr[i + 1]){
            if (arr[i + 1] > mx) {
                mx = arr[i + 1];
            }
            
            if (arr[i] < mn) {
                mn = arr[i];
            }
        }
        else{
            if (arr[i] > mx) {
                mx = arr[i];
            }
            
            if (arr[i + 1] < mn) {
                mn = arr[i + 1];
            }
        }
             
        // Increment the index by 2 as two 
        // elements are processed in loop 
        i += 2
    }
     
    return [mx, mn]
}

let result = getMinMax([20, 30, 10, 5, 6, 2, 8])
console.log(result)