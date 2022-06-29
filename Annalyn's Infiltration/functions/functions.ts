export const isBoolean = (): boolean => {
  let auxiliarRamdom = Math.floor(Math.random() * 2);

  if (auxiliarRamdom === 0) {
    return true;
  } else {
    return false;
  }
};

export const canExecuteFastAttack = (knightIsAwake: boolean) => {
  if (knightIsAwake) {
    return console.log(
      "Não é possivel fazer um ataque rápido, pois o cavaleiro está acordado. "
    );
  } else {
    return console.log(
      "Ataque rápido executado com sucesso! Cavaleiro está dormindo "
    );
  }
};

export const canSpy = (
  knightIsAwake: boolean,
  archerIsAwake: boolean,
  prisonerIsAwake: boolean
) => {
  if (
    knightIsAwake === false &&
    archerIsAwake === true &&
    prisonerIsAwake === false
  ) {
    return console.log("É possível espiar!");
  } else {
    return console.log("Não é possível espiar!");
  }
};

export const canSignalPrisoner = (
  archerIsAwake: boolean,
  prisonerIsAwake: boolean
) => {
  if (archerIsAwake === false && prisonerIsAwake === true) {
    return console.log("É possível dar um sinal para o prisioneiro!");
  } else {
    return console.log("Não é possível dar um sinal para o prisionneiro!");
  }
};

export const canFreePrisoner = (
  knightIsAwake: boolean,
  archerIsAwake: boolean,
  prisonerIsAwake: boolean,
  petDogIsPresent: boolean
) => {
  if (
    knightIsAwake &&
    archerIsAwake === false &&
    prisonerIsAwake &&
    petDogIsPresent === true
  ) {
    return console.log("Não foi possível libertar o prisioneiro! ");
  } else {
    return console.log("Show! O prisioneiro está livre. ");
  }
};

export const characterStates = (
  knightIsAwake: boolean,
  archerIsAwake: boolean,
  prisonerIsAwake: boolean,
  petDogIsPresent: boolean
) => {
  return console.log(
    `Cavaleiro:${knightIsAwake} | Arqueiro:${archerIsAwake} | Prisioneiro:${prisonerIsAwake} | Cachorro:${petDogIsPresent} `
  );
};
