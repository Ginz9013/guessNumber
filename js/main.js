// 1.抓出DOM節點
// 2.設監聽
// 3.該有的變數加上去

const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const minNode = document.querySelector("#min");
const maxNode = document.querySelector("#max");
const numArea = document.querySelector(".numInfo");

const answer = Math.floor(Math.random()*100 +1);
let minNum = 1;
let maxNum = 100;

btn.addEventListener("click", () => {
    let guessNum = +input.value;
    input.value = null;
    
    // 防呆
    if(guessNum < minNum || guessNum > maxNum) {
        alert("請輸入正確數字");
        return
    }

    if(guessNum < answer) {
        minNum = guessNum;
        minNode.innerText = guessNum;
    }

    if(guessNum > answer) {
        maxNum = guessNum;
        maxNode.innerText = guessNum;
    }

    if(guessNum === answer) {
        numArea.innerHTML = `<h1>恭喜答對，答案是${answer}</h1>`;
    }
})