
// Function to find the largest contiguous array sum
function maxSubArraySum(a) {
    let size = a.length;
    // Create an array to store intermediate results
    let dp = new Array(size);
    // Initialize the first element of the intermediate array with the first element of the input array
    dp[0] = a[0];
    // Initialize the answer with the first element of the intermediate array
    let ans = dp[0];
     
    for (let i = 1; i < size; i++) {
        // Calculate the maximum of the current element and the sum of the current element and the previous result
        dp[i] = Math.max(a[i], a[i] + dp[i - 1]);
        // Update the answer with the maximum value encountered so far
        ans = Math.max(ans, dp[i]);
    }
    // Print the maximum contiguous array sum
    console.log(ans);
}
 
let a = [-4,-3,-10,4,5,2,10,5];
// Call the function to find and print the maximum contiguous array sum
maxSubArraySum(a);