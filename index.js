const wakeDog = function(dogName, dogBreed) { 
    let dog = `${dogName} the ${dogBreed}`;
    console.log(`Wake ${dog}`);
    return `Wake ${dog}`;
  }

  const leashDog = function(dogName, dogBreed) {
      let dog = `${dogName} the ${dogBreed}`;
      console.log(`Lease ${dog}`);
      return `Leash ${dog}`;
      
  }

  const walkToPark = function(dogName, dogBreed) {
    let dog = `${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dog}`);
    return `Walk to the park with ${dog}`;
  }

  const throwFrisbee = function(dogName, dogBreed) {
    let dog = `${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dog}`);
    return `Throw the frisbee for ${dog}`;
  }
  
  const walkHome = function(dogName, dogBreed) {
    let dog = `${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dog}`);
    return `Walk home with ${dog}`;
  }
  
  const unleashDog = function(dogName, dogBreed) {
    let dog = `${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dog}`);
    return `Unleash ${dog}`;
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

  const exerciseDog = function(dogName, dogBreed) {
      return routine.map(action => action(dogName, dogBreed));
    }