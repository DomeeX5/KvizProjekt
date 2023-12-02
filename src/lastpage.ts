const pointsParag = document.getElementById('points') as HTMLParagraphElement;
const correctLabel = document.getElementById('correctLabel');
const incorrectLabel1 = document.getElementById('incorrect1Label');
const incorrectLabel2 = document.getElementById('incorrect2Label');
const correctInput = document.getElementById('correct') as HTMLInputElement;
const incorrectInput1 = document.getElementById('incorrect1') as HTMLInputElement;
const incorrectInput2 = document.getElementById('incorrect2') as HTMLInputElement;
let points = parseInt(localStorage.getItem("points")!);
let selectedData: string[] = JSON.parse(localStorage.getItem("selectedOptions")!);
console.log(selectedData);
pointsParag.textContent = `Pontszámod: ${points}/10`

document!.addEventListener('DOMContentLoaded', () => {
    
})