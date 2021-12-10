const fibonacci = function (member) {
    sequence = [1, 1, 2];

    if (member < 1) {
        return "OOPS";
    }
    if (member < 4) {
        return sequence[member - 1];
    }
    for (let index = 2; index < member; index++) {
        sequence.push(sequence[index] + sequence[index - 1]);
    }
    return sequence[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
