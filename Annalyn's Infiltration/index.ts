import prompt from "prompt-sync";
import {
  canExecuteFastAttack,
  isBoolean,
  canSpy,
  canFreePrisoner,
  canSignalPrisoner,
  characterStates,
} from "./functions/functions";

console.clear();

const readline = prompt();

let knightIsAwake: boolean;
let archerIsAwake: boolean;
let prisonerIsAwake: boolean;
let petDogIsPresent: boolean;

prisonerIsAwake = isBoolean();
archerIsAwake = isBoolean();
knightIsAwake = isBoolean();
petDogIsPresent = isBoolean();

characterStates(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
canExecuteFastAttack(knightIsAwake);
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
canSignalPrisoner(archerIsAwake, prisonerIsAwake);
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
