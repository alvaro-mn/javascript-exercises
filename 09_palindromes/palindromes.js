const palindromes = function (string) {
    let normalized = string.replace(/[!,. ]/g, "").toLowerCase();
    let chars = normalized.split("");
    let backwards = "";
    for (let index = chars.length - 1; index >= 0; index--) {
        backwards = backwards + chars[index];
    }

    return normalized === backwards;
};

// Do not edit below this line
module.exports = palindromes;
