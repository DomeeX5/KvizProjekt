

const pointsParag = document.getElementById('points') as HTMLParagraphElement;
let points = parseInt(localStorage.getItem("points")!);
pointsParag.textContent = `Pontszámod: ${points}`