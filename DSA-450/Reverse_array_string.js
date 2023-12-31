/**
 * Reverse an array/string 
 * input -[1,2,3,4,5]
 * output-:[5,4,3,2,1]
 * steps: 1) take start and end initialize with 0 and n-1 where n=length of array
            2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
            start = start +1, end = end – 1
 */
var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp;
        start++;
        end--;
    }
};

/**
 *  Time Complexity: O(n)
    Auxiliary Space: O(1)
 */