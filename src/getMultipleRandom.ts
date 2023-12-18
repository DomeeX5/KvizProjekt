import { country } from "./quizInterfaces";
import { city } from "./quizInterfaces";
/**
 * 
 * @param arr 
 * @param num 
 * @returns 
 */
export function getMultipleRandom(arr: Array<country>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
/**
 * 
 * @param arr 
 * @param num 
 * @returns 
 */

export function getMultipleRandomCity(arr: Array<city>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}