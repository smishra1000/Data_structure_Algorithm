
/**
 * Reverse the array two times.
First time we will reverse the first n-1(n=size of array) elements.
Finally, we will get our rotated array by reversing the entire array.
 */
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 1; // No. of rotations
let i, j;
 
console.log("Given array is");
for (i = 0; i < n; i++) {
   console.log(arr[i])
}
 
// Reverse the first n-1 terms
for (i = 0, j = n - k - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Reverse the entire array
for (i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
console.log("after rotation array is")
console.log();
for (i = 0; i < n; i++) {
    console.log(arr[i])
}