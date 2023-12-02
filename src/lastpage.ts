import { RandomOrder } from "./randomOrder";
const pointsParag = document.getElementById('points') as HTMLParagraphElement;
const correctLabel = document.getElementById('correctLabel');
const incorrectLabel1 = document.getElementById('incorrect1Label');
const incorrectLabel2 = document.getElementById('incorrect2Label');
const correctInput = document.getElementById('correct') as HTMLInputElement;
const incorrectInput1 = document.getElementById('incorrect1') as HTMLInputElement;
const incorrectInput2 = document.getElementById('incorrect2') as HTMLInputElement;
const app2Div = document.getElementById('app2')
let points = parseInt(localStorage.getItem("points")!);
let selectedData: string[] = JSON.parse(localStorage.getItem("selectedOptions")!);
let quizQuestions: string[] = JSON.parse(localStorage.getItem("quizQuestions")!);
console.log(selectedData);
console.log(quizQuestions);
pointsParag.textContent = `Pontszámod: ${points}/10`
let k = 0;

document!.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < selectedData.length; i++) {
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    const image = document.createElement('img')
    image.classList.add('lastpageImage')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    const input1 = document.createElement('input')
    input1.type = 'radio'
    input1.name = 'test'
    const input2 = document.createElement('input')
    input2.type = 'radio'
    input2.name = 'test'
    const input3 = document.createElement('input')
    input3.type = 'radio'
    input3.name = 'test'
    const label1 = document.createElement('label')
    const label2 = document.createElement('label')
    const label3 = document.createElement('label')
    

    
    app2Div!.appendChild(div)
    div.appendChild(image)
    div.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(input1)
    li2.appendChild(input2)
    li3.appendChild(input3)
    li1.append(label1)
    li2.appendChild(label2)
    li3.appendChild(label3)
    image.src = quizQuestions[k]
    k++;
    label1.textContent = quizQuestions[k]
    k++;
    label2.textContent = quizQuestions[k]
    k++;
    label3.textContent = quizQuestions[k]
    k++;
    }
    const backToMainPage = document.createElement('a')
    app2Div!.appendChild(backToMainPage)
    backToMainPage.href = '/index.html'
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