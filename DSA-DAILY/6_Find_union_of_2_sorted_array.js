// Union of two sorted array
// two sorted arrays
 
    /* Function prints union of arr1[] and arr2[]
    m lenth of  arr1[]
    n length of arr2[] */
    function unionOf2sortedArray( arr1,  arr2,  m,  n)
    {
        var i = 0, j = 0;
        while (i < m && j < n) {
            if (arr1[i] < arr2[j])
                document.write(arr1[i++] + " ");
            else if (arr2[j] < arr1[i])
                document.write(arr2[j++] + " ");
            else {
                document.write(arr2[j++] + " ");
                i++;
            }
        }
 
        /* Print remaining elements of
        the larger array */
        while (i < m)
            document.write(arr1[i++] + " ");
        while (j < n)
            document.write(arr2[j++] + " ");
 
        return 0;
    }
 
        var arr1 = [ 1, 2, 4, 5, 6 ];
        var arr2 = [ 2, 3, 5, 7 ];
        var m = arr1.length;
        var n = arr2.length;
        unionOf2sortedArray(arr1, arr2, m, n);