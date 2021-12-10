const findTheOldest = function (people) {
    let oldest;
    people.forEach(person => {
        if (oldest == undefined) {
            oldest = person;
        } else {
            let currentAge = ("yearOfDeath" in person ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth);
            let oldestAge = ("yearOfDeath" in oldest ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth);
            if (currentAge > oldestAge) {
                oldest = person;
            }
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
