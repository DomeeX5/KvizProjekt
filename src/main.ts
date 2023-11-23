

const url = "https://retoolapi.dev/sCSwgn/countryquiz"

const submit = document.getElementById('submit');
const img = document.getElementById('img');
const correct = document.getElementById('correct');
const incorrectOne = document.getElementById('incorrectone');
const incorrectTwo = document.getElementById('incorrecttwo');


submit!.addEventListener('click', () => {
  const imgText = (img as HTMLInputElement).value;
  const correctText = (correct as HTMLInputElement).value;
  const incorrectOneText = (incorrectOne as HTMLInputElement).value;
  const incorrectTwoText = (incorrectTwo as HTMLInputElement).value;

  const obj = [imgText, correctText, incorrectOneText, incorrectTwoText];
  postData(url, obj);
})

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}