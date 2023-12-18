import { country } from "./quizInterfaces";
import { city } from "./quizInterfaces";
/**
 * Az ország kvíz adatbázisából választ ki random x db-ot.
 * @param arr A lista amiből kiválaszt random x db-ot. 
 * @param num A darabszám amennyit kikell választania.
 * @returns A num alapján kiválasztott darabszámú lista.
 */
export function getMultipleRandom(arr: Array<country>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
/**
 * A város kvíz adatbázisából választ ki random 10 darabot.
 * @param arr  A lista amiből kiválaszt random x db-ot. 
 * @param num A darabszám amennyit kikell választania.
 * @returns A num alapján kiválasztott darabszámú lista.
 */

export function getMultipleRandomCity(arr: Array<city>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}