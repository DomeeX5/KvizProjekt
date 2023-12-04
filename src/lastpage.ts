import { RandomOrder2 } from "./randomOrder";
const app2Div = document.getElementById('app2')
let points = parseInt(localStorage.getItem("points")!);
let selectedData: string[] = JSON.parse(localStorage.getItem("selectedOptions")!);
let quizData: string[] = JSON.parse(localStorage.getItem("quizData")!);
let correctCountry: string[] = JSON.parse(localStorage.getItem("correctCountry")!);
let incorrectAnswer1: string[] = JSON.parse(localStorage.getItem("incorrectAnswer1")!);
let incorrectAnswer2: string[] = JSON.parse(localStorage.getItem("incorrectAnswer2")!);
let k = 0;
let j = 0;
document!.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < selectedData.length; i++) {
    const ul = document.createElement('ul')
    ul.classList.add('myElement')
    const div = document.createElement('div')
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
    
    app2Div!.appendChild(div)
    div!.appendChild(image)
    div!.appendChild(ul)
    div.classList.add('container')
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
      input1.checked = true
    }
    if (selectedData[j] == incorrectAnswer1[j]){
      label1.style.color = 'green'
      label2.style.color = 'red'
      input2.checked = true
    }
    if (selectedData[j] == incorrectAnswer2[j]){
      label1.style.color = 'green'
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
    const pointsParag = document.createElement('p')
    app2Div!.appendChild(pointsParag)
    pointsParag.textContent = `Pontszámod: ${points}/10`
    const backToMainPage = document.createElement('a')
    app2Div!.appendChild(backToMainPage)
    backToMainPage.href = '/'
    backToMainPage.classList.add('btn')
    backToMainPage.classList.add('btn-primary')
    backToMainPage.textContent = 'Vissza a főoldalra'
})