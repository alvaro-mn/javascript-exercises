const removeFromArray = function (array, ...toRemove) {
    toRemove.forEach(element => {
        let index = array.findIndex(item => item === element);
        if (index >= 0) {
            array.splice(index, 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
