/**
 * Move all negative numbers to beginning and positive to end with
 *  constant extra space
 */

// JavaScript code for the approach 
  
// Using Dutch National Flag Algorithm. 
function reArrange(arr, n){ 
    let low = 0,high = n - 1 
    while(low<high){ 
        if(arr[low] < 0) 
            low += 1 
        else if(arr[high] > 0) 
            high -= 1 
        else{ 
            let temp = arr[low] 
            arr[low] = arr[high] 
            arr[high] = temp 
        } 
    } 
} 

let arr = [2,3,-1,-4,-5,10,15,-9] 
let n = arr.length 
reArrange(arr,n) 


/** Approach 2.
Two pointer approach 
take two variables like left and right which hold the 0 and N-1 indexes
1. Check If the left and right pointer elements are negative then simply 
increment the left pointer.

2.Otherwise, if the left element is positive and the right element is negative 
then simply swap the elements, and simultaneously increment and decrement the 
left and right pointers.

3. Else if the left element is positive and the right element is also positive
 then simply decrement the right pointer.

 4.Repeat the above 3 steps until the left pointer ? right pointer.
 **/
function shiftall(arr, left, right) 
{ 
      
    // Loop to iterate over the  
    // array from left to the right 
    while (left <= right) 
    { 
          
        // Condition to check if the left 
        // and the right elements are  
        // negative 
        if (arr[left] < 0 && arr[right] < 0) 
            left += 1; 
          
        // Condition to check if the left  
        // pointer element is positive and  
        // the right pointer element is negative 
        else if(arr[left] > 0 && arr[right] < 0) 
        { 
            let temp = arr[left]; 
            arr[left] = arr[right]; 
            arr[right] = temp; 
            left += 1; 
            right -= 1; 
        } 
          
        // Condition to check if both the  
        // elements are positive 
        else if (arr[left] > 0 && arr[right] > 0) 
            right -= 1; 
        else
        { 
            left += 1; 
            right -= 1; 
        } 
    } 
} 

let arr2 = [ -12, 11, -13, -5,  
    6, -7, 5, -3, 11 ]; 
let arr_size = arr2.length; 

// Function Call 
shiftall(arr2, 0, arr_size - 1); 
  
