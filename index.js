var wakeDog = function(dogName, dogBreed) {
    var msg = `Wake ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}
var leashDog = function(dogName, dogBreed) {
    var msg = `Leash ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}
var walkToPark = function(dogName, dogBreed) {
    var msg = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}
var throwFrisbee = function(dogName, dogBreed) {
    var msg = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}
var walkHome = function(dogName, dogBreed) {
    var msg = `Walk home with ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}
var unleashDog = function(dogName, dogBreed) {
    var msg = `Unleash ${dogName} the ${dogBreed}`
    console.log(msg);
    return msg;
}

const routine = [wakeDog, leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}