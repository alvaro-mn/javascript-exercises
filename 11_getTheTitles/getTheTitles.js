const getTheTitles = function (books) {
    let result = []
    books.forEach(element => {
        result.push(element.title);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
