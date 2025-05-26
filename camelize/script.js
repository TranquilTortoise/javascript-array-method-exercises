// change dash-separated words like "my-short-string" into camel-cased "myShortString"

function camelize(str) {

    // split string by "-" or " "
    const splitArr = str.split(/[-\s]+/);

    // filter array to remove empty elements
    const filteredArr = splitArr.filter((word) => {
        return word.length > 0
    });

    // lowercase filtered array
    const lowerCasedArr = filteredArr.map((str) => str.toLowerCase());

    // capitalize first letter of each split word except the first
    let camelizedArray = [];

    for (let i = 0; i < lowerCasedArr.length; i++) {

        if (i === 0) {
            camelizedArray[i] = lowerCasedArr[i];
        } else {
            camelizedArray[i] = lowerCasedArr[i].charAt(0).toUpperCase() + lowerCasedArr[i].slice(1);
        }
    }

   // return string with camel-cased words added together
   let camelizedString = "";

    for (let i = 0; i < camelizedArray.length; i++) {
        camelizedString = camelizedString + camelizedArray[i];
   }

    return camelizedString;
}