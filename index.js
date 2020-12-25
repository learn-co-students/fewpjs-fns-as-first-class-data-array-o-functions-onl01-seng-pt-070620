function wakeDog(dogName, dogBreed) {
    const newString = (`Wake ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}
function leashDog(dogName, dogBreed) {
    const newString = (`Leash ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}
function walkToPark(dogName, dogBreed) {
    const newString = (`Walk to the park with ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}
function throwFrisbee(dogName, dogBreed) {
    const newString = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}
function walkHome(dogName, dogBreed) {
    const newString = (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}
function unleashDog(dogName, dogBreed) {
    const newString = (`Unleash ${dogName} the ${dogBreed}`)
    console.log(newString);
    return (newString);
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog,breed) {
    const returnArray = []
    for (let i = 0; i < routine.length; i ++) {
        returnArray.push(routine[i](dog,breed))
    }
    return returnArray
}