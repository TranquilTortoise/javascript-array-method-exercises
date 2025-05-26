// take an array and randomly shuffle the elements

function shuffleArray(arr) {
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        let j =Math.floor(Math.random() * (i + 1));

        // destructuring assignment
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}