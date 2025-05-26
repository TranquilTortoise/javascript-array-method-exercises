// get an array and remove all elements except those between a and b

function filterRangeInPlace(arr, a, b) {

    // delete elements out of range
    for (let i = arr.length - 1; i >=0; i--) {
        if (arr[i] <= a || arr[i] >= b) {
            arr.splice(i, 1);
        }
    }
}

