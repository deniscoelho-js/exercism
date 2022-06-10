export const isBoolean = (): boolean => {
  let auxiliarRamdom = Math.floor(Math.random() * 2);

  if (auxiliarRamdom === 0) {
    return true;
  } else {
    return false;
  }
};

export const canExecuteFastAttack = (knightIsAwake: boolean) => {
  if (knightIsAwake === true) {
    return console.log(
      "Não é possivel fazer um ataque rápido, pois o cavaleiro está acordado. "
    );
  } else {
    return console.log(
      "Ataque rápido executado com sucesso! Cavaleiro está dormindo "
    );
  }
};
