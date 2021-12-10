const reverseString = function (str) {
    let reversedStr = "";
    let splitStr = str.split("");

    for (let index = splitStr.length - 1; index >= 0; index--) {
        reversedStr = reversedStr + splitStr[index];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
