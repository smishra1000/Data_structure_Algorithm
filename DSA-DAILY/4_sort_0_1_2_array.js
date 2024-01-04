
/**
 * Approach 1: Count the number of 0s, 1s and 2s in the array and then store them in the array.

Keep three counters c0 to count 0s, c1 to count 1s and c2 to count 2s.
Traverse through the array and increase the count of c0 if the element is 0,
 increase the count of c1 if the element is 1 and increase the count of c2 
 if the element is 2.
Now again traverse the array and replace the first c0 elements with 0,
 next c1 elements with 1 and next c2 elements with 2.
Return the array.
 */

// ES6 Arrow Function
const sortArr = arr => {
    // step 1
    let c0 = 0, c1 = 0, c2 = 0, i;

    // step2
    for (i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 0:
                c0++;
                break;
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
        }
    }

    // step 3
    i = 0;
    while (c0 > 0) {
        arr[i++] = 0;
        c0--;
    }

    while (c1 > 0) {
        arr[i++] = 1;
        c1--;
    }

    while (c2 > 0) {
        arr[i++] = 2;
        c2--;
    }

    return arr;
}

//   Time Complexity: O(n)

// Space Complexity: O(1)


/** 
 * Approach2
 * using three-pointers

Make three-pointers start, mid and end where the start and mid are equal to 0 and end is equal to the index of the last element of the array.
2. Initializes pivot to 1

3. Traverse the array condition being mid <= end

If arr[mid] is less than pivot — swap, increment start and mid by 1
If arr[mid] is greater than pivot — swap, decrement end by 1
If none of the conditions is true then increment mid by 1
*/
// ES6 Arrow Function

// Function to swap two elements in an array
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

// Sort array function
const sortArry = arr => {
    let stat = 0, mid = 0, pivot = 1, end = arr.length - 1;

    while(mid <= end) {
        if(arr[mid] < pivot) {
            swap(arr, start, mid);
            start++;
            mid++;
        } else if(arr[mid] > pivot) {
            swap(arr, mid, end);
            end--;
        } else {
            mid++;
        }
    }

    return arr;
}
