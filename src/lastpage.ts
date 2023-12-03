import { RandomOrder2 } from "./randomOrder";
const pointsParag = document.getElementById('points') as HTMLParagraphElement;
/*
const correctLabel = document.getElementById('correctLabel');
const incorrectLabel1 = document.getElementById('incorrect1Label');
const incorrectLabel2 = document.getElementById('incorrect2Label');
const correctInput = document.getElementById('correct') as HTMLInputElement;
const incorrectInput1 = document.getElementById('incorrect1') as HTMLInputElement;
const incorrectInput2 = document.getElementById('incorrect2') as HTMLInputElement;
*/
const app2Div = document.getElementById('app2')
let points = parseInt(localStorage.getItem("points")!);
let selectedData: string[] = JSON.parse(localStorage.getItem("selectedOptions")!);
let quizData: string[] = JSON.parse(localStorage.getItem("quizData")!);
let correctCountry: string[] = JSON.parse(localStorage.getItem("correctAnswer")!);
let incorrectAnswer1: string[] = JSON.parse(localStorage.getItem("incorrectAnswer1")!);
let incorrectAnswer2: string[] = JSON.parse(localStorage.getItem("incorrectAnswer2")!);
console.log('selectedData:')
console.log(selectedData)
console.log('quizData:')
console.log(quizData)
console.log('correctAnswer:')
console.log(correctCountry)
console.log('incorrectAnswer1:')
console.log(incorrectAnswer1)
console.log('incorrectAnswer2:')
console.log(incorrectAnswer2)
pointsParag.textContent = `Pontszámod: ${points}/10`
let k = 0;
let j = 0;
document!.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < selectedData.length; i++) {
    const ul = document.createElement('ul')
    ul.classList.add('myElement')
    const image = document.createElement('img')
    image.classList.add('lastpageImage')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    const input1 = document.createElement('input')
    input1.type = 'radio'
    input1.name = `test-${j}`
    input1.disabled = true
    const input2 = document.createElement('input')
    input2.type = 'radio'
    input2.name = `test-${j}`
    input2.disabled = true
    const input3 = document.createElement('input')
    input3.type = 'radio'
    input3.name = `test-${j}`
    input3.disabled = true
    const label1 = document.createElement('label')
    const label2 = document.createElement('label')
    const label3 = document.createElement('label')
    
    app2Div!.appendChild(image)
    app2Div!.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(input1)
    li2.appendChild(input2)
    li3.appendChild(input3)
    li1.append(label1)
    li2.appendChild(label2)
    li3.appendChild(label3)
    RandomOrder2();
    if (selectedData[j] == correctCountry[j]){
      label1.style.color = 'green'
      label2.style.color = 'red'
      label3.style.color = 'red'
      input1.checked = true
    }
    if (selectedData[j] == incorrectAnswer1[j]){
      label1.style.color = 'green'
      label2.style.color = 'red'
      label3.style.color = 'red'
      input2.checked = true
    }
    if (selectedData[j] == incorrectAnswer2[j]){
      label1.style.color = 'green'
      label2.style.color = 'red'
      label3.style.color = 'red'
      input3.checked = true
    }
    j++;
    image.src = quizData[k]
    k++;
    label1.textContent = quizData[k]
    k++;
    label2.textContent = quizData[k]
    k++;
    label3.textContent = quizData[k]
    k++;
    }
    const backToMainPage = document.createElement('a')
    app2Div!.appendChild(backToMainPage)
    backToMainPage.href = '/'
    backToMainPage.classList.add('btn')
    backToMainPage.classList.add('btn-primary')
    backToMainPage.textContent = 'Vissza a főoldalra'
})

/*
<img src="" id="image" alt=""><br>
        <ul>
          <li>
            <input type="radio" name="first" id="correct" disabled><label for="correct" id="correctLabel"></label><br>
          </li>
          <li>
            <input type="radio" name="first" id="incorrect1" disabled><label for="incorrect1" id="incorrect1Label"></label><br>
          </li>
          <li>
            <input type="radio" name="first" id="incorrect2" disabled><label for="incorrect2" id="incorrect2Label"></label><br>
          </li>
        </ul>
*/