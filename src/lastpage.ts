import { CorrectAnswer } from "./country";

let points = new CorrectAnswer();

const pointsParag = document.getElementById('points') as HTMLParagraphElement;

pointsParag.textContent = `Pontszámod: ${points.points}`