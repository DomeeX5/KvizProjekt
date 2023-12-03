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
  const quizData: string[] = [];
  const incorrectAnswer1: string[] = [];
  const incorrectAnswer2: string[] = [];
  const selectedData: string[] = [];
  const CorrectCountry: string[] = [];
  let i = 1;
  let k = 0;
  image.src = currentQuiz[0].CountryImage;
  correctLabel!.textContent = currentQuiz[0].CorrectAnswer;
  incorrectLabel1!.textContent = currentQuiz[0].FirstIncorrectAnswer;
  incorrectLabel2!.textContent = currentQuiz[0].SecondIncorrectAnswer;
  RandomOrder();
  nextq!.addEventListener('click', () => {
    
    if (!correctInput.checked && !incorrectInput1.checked && !incorrectInput2.checked) {
      error!.textContent = "Kötelező kiválasztanod egy opciót!";
    } else {
      if(correctInput.checked){
        let points = parseInt(localStorage.getItem("points")!);
        points++;
        localStorage.setItem("points", points.toString())
        selectedData.push(currentQuiz[k].CorrectAnswer)
      } if (incorrectInput1.checked) {
        selectedData.push(currentQuiz[k].FirstIncorrectAnswer)
      } if (incorrectInput2.checked) {
        selectedData.push(currentQuiz[k].SecondIncorrectAnswer)
      }
      quizData.push(currentQuiz[k].CountryImage, currentQuiz[k].CorrectAnswer, currentQuiz[k].FirstIncorrectAnswer, currentQuiz[k].SecondIncorrectAnswer)
      incorrectAnswer1.push(currentQuiz[k].FirstIncorrectAnswer)
      incorrectAnswer2.push(currentQuiz[k].SecondIncorrectAnswer)
      CorrectCountry.push(currentQuiz[k].CorrectAnswer)
      appDiv!.classList.toggle('w3-animate-bottom');
      app2Div!.classList.toggle('w3-animate-bottom');
      RandomOrder();
      image.src = currentQuiz[i].CountryImage;
      correctLabel!.textContent = currentQuiz[i].CorrectAnswer;
      incorrectLabel1!.textContent = currentQuiz[i].FirstIncorrectAnswer;
      incorrectLabel2!.textContent = currentQuiz[i].SecondIncorrectAnswer;
      i++;
      k++;
      error!.textContent = "";
      correctInput.checked = false;
      incorrectInput1.checked = false;
      incorrectInput2.checked = false;
      if (i == 10) {
        nextq.textContent = "Kérdőív befejezése"
        nextq!.addEventListener('click', () => {
            localStorage.setItem("selectedOptions", JSON.stringify(selectedData));
            localStorage.setItem("quizData", JSON.stringify(quizData));
            localStorage.setItem("incorrectAnswer1", JSON.stringify(incorrectAnswer1));
            localStorage.setItem("incorrectAnswer2", JSON.stringify(incorrectAnswer2));
            localStorage.setItem("correctCountry", JSON.stringify(CorrectCountry));
            window.location.href = "./end.html"
        })
      }
    }
  })
}

