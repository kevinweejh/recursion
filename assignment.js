
const fibs = (n, arr = []) => {
    const a = 0;
    const b = 1;
    arr = [a, b];
    
    for (let i = 2; i < n; i++) {
        let next = arr[i-2] + arr[i-1];
        arr.push(next);
    }

    return arr;
}


const fibsRec = (n, arr = [0,1]) => {
    if (n <= 2) {
        return arr.slice(0, n)
    }
    let seq = fibsRec(n-1);
    arr = [...seq, seq[n-2]+seq[n-3]];
    return arr;
}

const merge1 = [3, 2, 1, 13, 8, 5, 0, 1];
const merge2 = [105, 79, 100, 110];

const mergeSort = (arr) => {
    const merge = (left, right) => {
        let sortedArr = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                sortedArr.push(left[leftIndex]);
                leftIndex++;
            } else {
                sortedArr.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    if (arr.length <= 1) {
        return arr;
    }
    const leftSide = arr.slice(0, arr.length/2);
    const rightSide = arr.slice(arr.length/2);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}