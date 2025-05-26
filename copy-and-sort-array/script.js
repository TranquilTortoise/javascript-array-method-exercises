// take an array and create a new array that is sorted without changing the old one

function copySorted(arr) {

    let copiedArr = arr.slice(-(arr.length));

    return copiedArr.sort();
    
}