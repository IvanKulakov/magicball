const startBtn = document.getElementById("btn");
const answer = document.getElementById("answer");
const ask = document.getElementById("ask");
console.log(answer);
function getRandomInt() {
    ask.classList.add('invisible');
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 1: answer.innerHTML = 'YES';break;
        case 2: answer.innerHTML = 'MAYBE';break;
        case 0: answer.innerHTML = 'NO'; break
    }
}

startBtn.onclick = getRandomInt;


