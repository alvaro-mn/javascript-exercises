const sumAll = function (numberFrom, numberTo) {
    if (numberFrom < 0 || numberTo < 0) {
        return "ERROR";
    }

    if (typeof numberFrom != "number" || typeof numberTo != "number") {
        return "ERROR";
    }

    if (numberFrom > numberTo) {
        [numberFrom, numberTo] = [numberTo, numberFrom];
    }

    sum = 0;
    for (let index = numberFrom; index <= numberTo; index++) {
        sum = sum + index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
