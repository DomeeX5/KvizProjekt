const opcio1 = document.getElementById('Korea')
const opcio2 = document.getElementById('Japan')
const opcio3 = document.getElementById('Vietnam')
let correct: boolean
let goodanswers = 0
opcio1!.addEventListener('select', () => {
  correct = true
  goodanswers++;
})
opcio2!.addEventListener('select', () => {
  correct = false
})
opcio3!.addEventListener('select', () => {
  correct = false
})

