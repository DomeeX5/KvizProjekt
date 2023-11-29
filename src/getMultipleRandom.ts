import { country } from "./country";

export function getMultipleRandom(arr: Array<country>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
