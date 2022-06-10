import prompt from "prompt-sync";
import { canExecuteFastAttack, isBoolean } from "./functions/functions";

console.clear();

const readline = prompt();

let knightIsAwake: boolean = true;
let archerIsAwake: boolean = true;
let prisonerIsAwake: boolean = true;
let petDogIsPresent: boolean = true;

prisonerIsAwake = isBoolean();
archerIsAwake = isBoolean();
knightIsAwake = isBoolean();
petDogIsPresent = isBoolean();
