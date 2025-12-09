const findTheOldest = function(people) {
    return people.reduce((prev, person) => {
        const currYear = new Date().getFullYear();
        const currAge = "yearOfDeath" in person ? 
            person.yearOfDeath - person.yearOfBirth :
            currYear - person.yearOfBirth;
        const prevAge = "yearOfDeath" in prev ? 
            prev.yearOfDeath -prev.yearOfBirth :
            currYear - prev.yearOfBirth;

        return prevAge > currAge ? prev : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
