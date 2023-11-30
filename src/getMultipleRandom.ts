import { country } from "./quizInterfaces";
import { city } from "./quizInterfaces";

export function getMultipleRandom(arr: Array<country>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export function getMultipleRandomCity(arr: Array<city>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}