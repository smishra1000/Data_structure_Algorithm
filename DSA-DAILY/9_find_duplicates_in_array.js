function findDuplicates(arr) {
    const duplicates = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const index = arr[i] % n;
        arr[index] += n;
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] / n >= 2) {
            duplicates.push(i);
        }
    }
 
    return duplicates;
}
 
const arr = [1, 6, 3, 1, 3, 6, 6];
console.log("The repeating elements are:");
const ans = findDuplicates(arr);
ans.forEach((x) => {
    console.log(x + " ");
});