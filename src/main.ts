import { CountryService } from "./quizService";
import { getMultipleRandom } from "./getMultipleRandom";
import { RandomOrder } from "./randomOrder";
const countryService = new CountryService();
localStorage.setItem("points", "0");
document.addEventListener('DOMContentLoaded', getDatabase);

async function getDatabase() {
  const countries = await countryService.getAll();
  const currentQuiz = getMultipleRandom(countries, 10);
  const appDiv = document.getElementById('app');
  const app2Div = document.getElementById('app2');
  const correctLabel = document.getElementById('correctLabel');
  const incorrectLabel1 = document.getElementById('incorrect1Label') as HTMLLabelElement
  const incorrectLabel2 = document.getElementById('incorrect2Label') as HTMLLabelElement;
  const image = document.getElementById('image') as HTMLImageElement;
  const nextq = document.getElementById('nextq') as HTMLButtonElement;
  const correctInput = document.getElementById('correct') as HTMLInputElement;
  const incorrectInput1 = document.getElementById('incorrect1') as HTMLInputElement;
  const incorrectInput2 = document.getElementById('incorrect2') as HTMLInputElement;
  const error = document.getElementById('error');
  const selectedData: string[] = [];
  let i = 1;
  image.src = currentQuiz[0].CountryImage;
  correctLabel!.textContent = currentQuiz[0].CorrectAnswer;
  incorrectLabel1!.textContent = currentQuiz[0].FirstIncorrectAnswer;
  incorrectLabel2!.textContent = currentQuiz[0].SecondIncorrectAnswer;
  selectedData.push(currentQuiz[i].CorrectAnswer, currentQuiz[i].FirstIncorrectAnswer, currentQuiz[i].SecondIncorrectAnswer)
  RandomOrder();
  nextq!.addEventListener('click', () => {
    if (!correctInput.checked && !incorrectInput1.checked && !incorrectInput2.checked) {
      error!.textContent = "Kötelező kiválasztanod egy opciót!";
    } else {
      if(correctInput.checked){
        let points = parseInt(localStorage.getItem("points")!);
        points++;
        localStorage.setItem("points", points.toString())
        selectedData.push(currentQuiz[i].CorrectAnswer, currentQuiz[i].FirstIncorrectAnswer, currentQuiz[i].SecondIncorrectAnswer)
      } if (incorrectInput1.checked) {
        selectedData.push(currentQuiz[i].CorrectAnswer, currentQuiz[i].FirstIncorrectAnswer, currentQuiz[i].SecondIncorrectAnswer)
      } if (incorrectInput2.checked) {
        selectedData.push(currentQuiz[i].CorrectAnswer, currentQuiz[i].FirstIncorrectAnswer, currentQuiz[i].SecondIncorrectAnswer)
      }
      console.log(selectedData)
      appDiv!.classList.toggle('w3-animate-bottom');
      app2Div!.classList.toggle('w3-animate-bottom');
      RandomOrder();
      image.src = currentQuiz[i].CountryImage;
      correctLabel!.textContent = currentQuiz[i].CorrectAnswer;
      incorrectLabel1!.textContent = currentQuiz[i].FirstIncorrectAnswer;
      incorrectLabel2!.textContent = currentQuiz[i].SecondIncorrectAnswer;
      i++;
      error!.textContent = "";
      correctInput.checked = false;
      incorrectInput1.checked = false;
      incorrectInput2.checked = false;
      if (i == 10) {
        nextq.textContent = "Kérdőív befejezése"
        nextq!.addEventListener('click', () => {
          localStorage.setItem("selectedOptions", JSON.stringify(selectedData));
          window.location.href = './end.html'
        })
      }
    }
  })
}

