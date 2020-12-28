function wakeDog(dogName, dogBreed) {
    let dogString = `Wake ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString
}

const leashDog = (dogName, dogBreed) => {
    let dogString = `Leash ${dogName} the ${dogBreed}`;
    return dogString
}

const walkToPark = (dogName, dogBreed) => {
    let dogString = `Walk to the park with ${dogName} the ${dogBreed}`;
    return dogString
}

const throwFrisbee = (dogName, dogBreed) => {
    let dogString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return dogString
}

const walkHome = (dogName, dogBreed) => {
    let dogString = `Walk home with ${dogName} the ${dogBreed}`;
    return dogString
}

const unleashDog = (dogName, dogBreed) => {
    let dogString = `Unleash ${dogName} the ${dogBreed}`;
    return dogString
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => {
    const array = []
    for (let i = 0; i < routine.length; i++){
        array[i] = routine[i](dogName, dogBreed)
    }
    return array
}