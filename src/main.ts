import { country } from "./country";
import { CountryService } from "./countryService";

const countryService = new CountryService();

document.addEventListener('DOMContentLoaded', getDatabase);

async function getDatabase() {
  const countries = await countryService.getAll();
  const image = document.getElementById('image') as HTMLImageElement;
  const currentQuiz = getMultipleRandom(countries, 10);
  image.src = currentQuiz[0].CountryImage;
  console.log(currentQuiz);

  const correct = document.getElementById('correct') as HTMLInputElement;
  const incorrect1 = document.getElementById('incorrect1') as HTMLInputElement;
  const incorrect2 = document.getElementById('incorrect2') as HTMLInputElement;
  const correctLabel = document.getElementById('correctLabel');
  const incorrectLabel1 = document.getElementById('incorrect1Label');
  const incorrectLabel2 = document.getElementById('incorrect2Label');
  const nextPageButton = document.getElementById('nextPage') as HTMLInputElement;
  correctLabel!.textContent = currentQuiz[0].CorrectAnswer;
  incorrectLabel1!.textContent = currentQuiz[0].FirstIncorrectAnswer;
  incorrectLabel2!.textContent = currentQuiz[0].SecondIncorrectAnswer;
  
  function getMultipleRandom(arr: Array<country>, num: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
}


/*function shuffle(array: HTMLLabelElement[]) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }*/