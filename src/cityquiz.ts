import { CityService } from "./quizService";
import { getMultipleRandomCity } from "./getMultipleRandom";
import { RandomOrder } from "./randomOrder";
const cityService = new CityService();
localStorage.setItem("points", "0");
localStorage.setItem("selectedOptions", "");
localStorage.setItem("quizData", "");
localStorage.setItem("incorrectAnswer1", "");
localStorage.setItem("incorrectAnswer2", "");
localStorage.setItem("correctCountry", "");
document!.addEventListener('DOMContentLoaded', getDataBase)

async function getDataBase(){
    const cities = await cityService.getAll();
    const currentQuiz = getMultipleRandomCity(cities, 10);
    const appDiv = document.getElementById('app');
    const app2Div = document.getElementById('app2');
    const correctCityLabel = document.getElementById('correctCityLabel');
    const incorrectCityLabel1 = document.getElementById('incorrectCity1Label');
    const incorrectCityLabel2 = document.getElementById('incorrectCity2Label');
    const imageCity = document.getElementById('imageCity') as HTMLImageElement;
    const questionCity = document.getElementById('questionCity') as HTMLParagraphElement;
    const nextqCity = document.getElementById('nextqCity') as HTMLButtonElement;
    const correctCityInput = document.getElementById('correctCityInput') as HTMLInputElement;
    const incorrectCityInput1 = document.getElementById('incorrectCityInput1') as HTMLInputElement;
    const incorrectCityInput2 = document.getElementById('incorrectCityInput2') as HTMLInputElement;
    const errorCity = document.getElementById('errorCity');
    const quizData: string[] = [];
    const incorrectAnswer1: string[] = [];
    const incorrectAnswer2: string[] = [];
    const selectedData: string[] = [];
    const CorrectCity: string[] = [];
    let i = 1;
    let k = 0;
    imageCity.src = currentQuiz[0].CityImage;
    questionCity!.textContent = currentQuiz[0].Question;
    correctCityLabel!.textContent = currentQuiz[0].CorrectAnswer;
    incorrectCityLabel1!.textContent = currentQuiz[0].FirstIncorrectAnswer;
    incorrectCityLabel2!.textContent = currentQuiz[0].SecondIncorrectAnswer;
    RandomOrder();
    nextqCity!.addEventListener('click', () => {
        if (!correctCityInput.checked && !incorrectCityInput1.checked && !incorrectCityInput2.checked) {
            errorCity!.textContent = "Kötelező kiválasztanod egy opciót!";
        } else {
        if(correctCityInput.checked){
            let points = parseInt(localStorage.getItem("points")!);
            points++;
            localStorage.setItem("points", points.toString())
            selectedData.push(currentQuiz[k].CorrectAnswer)
        } if (incorrectCityInput1.checked) {
            selectedData.push(currentQuiz[k].FirstIncorrectAnswer)
        } if (incorrectCityInput2.checked) {
            selectedData.push(currentQuiz[k].SecondIncorrectAnswer)
        }
        quizData.push(currentQuiz[k].CityImage, currentQuiz[k].CorrectAnswer, currentQuiz[k].FirstIncorrectAnswer, currentQuiz[k].SecondIncorrectAnswer)
        incorrectAnswer1.push(currentQuiz[k].FirstIncorrectAnswer)
        incorrectAnswer2.push(currentQuiz[k].SecondIncorrectAnswer)
        CorrectCity.push(currentQuiz[k].CorrectAnswer)
        appDiv!.classList.toggle('w3-animate-bottom');
        app2Div!.classList.toggle('w3-animate-bottom');
        RandomOrder();
        imageCity.src = currentQuiz[i].CityImage;
        questionCity!.textContent = currentQuiz[i].Question;
        correctCityLabel!.textContent = currentQuiz[i].CorrectAnswer;
        incorrectCityLabel1!.textContent = currentQuiz[i].FirstIncorrectAnswer;
        incorrectCityLabel2!.textContent = currentQuiz[i].SecondIncorrectAnswer;
        i++;
        k++;
        errorCity!.textContent = "";
        correctCityInput.checked = false;
        incorrectCityInput1.checked = false;
        incorrectCityInput2.checked = false;
        if (i == 10) {
            nextqCity.textContent = "Kérdőív befejezése"
            nextqCity!.addEventListener('click', () => {
                localStorage.setItem("selectedOptions", JSON.stringify(selectedData));
                localStorage.setItem("quizData", JSON.stringify(quizData));
                localStorage.setItem("incorrectAnswer1", JSON.stringify(incorrectAnswer1));
                localStorage.setItem("incorrectAnswer2", JSON.stringify(incorrectAnswer2));
                localStorage.setItem("correctCountry", JSON.stringify(CorrectCity));
            window.location.href = './end.html'
            })
        }
        }
    })
}