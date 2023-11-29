import { CountryService } from "./countryService";
import { getMultipleRandom } from "./getMultipleRandom";
import { CorrectAnswer } from "./country";
const countryService = new CountryService();
let final = new CorrectAnswer();
let points = 0;
document.addEventListener('DOMContentLoaded', getDatabase);

async function getDatabase() {
  const countries = await countryService.getAll();
  const currentQuiz = getMultipleRandom(countries, 10);
  const correctLabel = document.getElementById('correctLabel');
  const incorrectLabel1 = document.getElementById('incorrect1Label');
  const incorrectLabel2 = document.getElementById('incorrect2Label');
  const image = document.getElementById('image') as HTMLImageElement;
  const nextq = document.getElementById('nextq') as HTMLButtonElement;
  const correctInput = document.getElementById('correct') as HTMLInputElement;
  const incorrectInput1 = document.getElementById('incorrect1') as HTMLInputElement;
  const incorrectInput2 = document.getElementById('incorrect2') as HTMLInputElement;
  const error = document.getElementById('error');
  let i = 1;
  image.src = currentQuiz[0].CountryImage;
  correctLabel!.textContent = currentQuiz[0].CorrectAnswer;
  incorrectLabel1!.textContent = currentQuiz[0].FirstIncorrectAnswer;
  incorrectLabel2!.textContent = currentQuiz[0].SecondIncorrectAnswer;

    const form = document.getElementById('randomForm') as HTMLFormElement;
    const radioArray = [correctInput, incorrectInput1, incorrectInput2]
  
    // Fisher-Yates shuffle
    for (let i = radioArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [radioArray[i], radioArray[j]] = [radioArray[j], radioArray[i]];
    }
  
    // Update the form with the randomized order
    radioArray.forEach((radio, index) => {
      form.insertBefore(radio.parentNode as Node, form.children[index]);
    });
  

  nextq!.addEventListener('click', () => {
    if (!correctInput.checked && !incorrectInput1.checked && !incorrectInput2.checked) {
      error!.textContent = "Kötelező kiválasztanod egy opciót!";
    } else {
      if(correctInput.checked && !incorrectInput1.checked && !incorrectInput2.checked){
        points++;
        console.log(points)
      }
      image.src = currentQuiz[i].CountryImage;
      correctLabel!.textContent = currentQuiz[i].CorrectAnswer;
      incorrectLabel1!.textContent = currentQuiz[i].FirstIncorrectAnswer;
      incorrectLabel2!.textContent = currentQuiz[i].SecondIncorrectAnswer;
      i = i + 1;
      error!.textContent = "";
      correctInput.checked = false;
      incorrectInput1.checked = false;
      incorrectInput2.checked = false;
      
      if (i == 10) {
        nextq.textContent = "Kérdőív befejezése"
        final.points = points;
        nextq!.addEventListener('click', () => {
          window.location.href = './end.html'
        })
      }
    }
  })
}



