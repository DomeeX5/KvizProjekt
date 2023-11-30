
const nextPageFlag = document.getElementById('nextPageFlag');
const nextPageCity = document.getElementById('nextPageCity');
nextPageFlag!.addEventListener('click', () => {
    window.location.href = './flagquiz.html'
})
nextPageCity!.addEventListener('click', () => {
    window.location.href = './cityquiz.html'
})