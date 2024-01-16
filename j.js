
let size = parseInt(prompt("Enter number", " "));
let length = size * size;
let div = [];
let n = 1;
let restart = document.getElementById("clear");
let finish = document.getElementById("patasxanh1");
let qq = 1;
for (let i = 1; i <= size; i++) {
    div[i] = document.createElement("div");
    div[i].id = "div" + [i];
    div[i].className = "DivRow";
    document.getElementById("container").appendChild(div[i]);
}

let button = [];
let NumberOfDiv = 1;
let q = 0;
for (let i = 1; i <= length; i++) {
    button[i] = document.createElement("button");
    button[i].id = "button" + [i];
    button[i].className = "button";
    document.getElementById("div" + NumberOfDiv).appendChild(button[i]);
    q++;
    if (q === size) {
        NumberOfDiv++;
        q = 0;
    }
}


let a = [];
let zzz = size;
let player = "X";
for (let i = 1; i <= length; i++) {
    button[i].addEventListener("click", fun);
}
function fun() {
    if (!this.textContent) {
        this.textContent = player;
    }
    q++;
    if (q === length) {
        finish.textContent = "GAME OVER";
    }
    if (finish.textContent === "WIN X" || finish.textContent === "WIN O") {
        alert("Click on RESTART");
        this.textContent = " ";
    }
    CheckWin();
    ChangePlayer();
}

function ChangePlayer() {
    if (player === "X") {
        player = "O";
    }
    else {
        player = "X";
    }
}


let j = 1;
let HowMany = 1;
let z;
for (let i = 1; i <= size; i++) {
    div[i] = [];
    for (z = 1; z <= length; z++) {

        div[i][z] = button[j];
        j++;
        if (HowMany === size) {

            HowMany = 1;
            break;
        }
        HowMany++;
    }

}


for (let i = 1; i <= size; i++) {
    a[i] = div[i];
}

function CheckWin() {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            //case1
            for (let z = 1; z <= size; z++) {
                if ((a[i][j].textContent === "X" || a[i][j].textContent === "O") && a[i][j].textContent === a[i][z].textContent) {
                    if (z === size) {
                        finish.textContent = "WIN" + " " + a[i][j].textContent;
                    }
                }
                else {
                    break;
                }
            }
            //case2
            for (let z = 1; z <= size; z++) {
                if ((a[i][j].textContent === "X" || a[i][j].textContent === "O") && a[i][j].textContent === a[z][j].textContent) {
                    if (z === size) {
                        finish.textContent = "WIN" + " " + a[i][j].textContent;
                    }
                }
                else {
                    break;
                }
            }

            //case3
            for (let z = 1; z <= size; z++) {
                if ((a[i][j].textContent === "X" || a[i][j].textContent === "O") && a[i][j].textContent === a[z][z].textContent && i === j) {
                    if (z === size) {
                        finish.textContent = "WIN" + " " + a[i][j].textContent;
                    }
                }
                else {
                    break;
                }
            }

            //case4
            for (let z = 1; z <= size; z++) {
                if ((a[i][j].textContent === "X" || a[i][j].textContent === "O") && a[i][j].textContent === a[z][zzz].textContent) {
                    if (zzz === 1) {
                        finish.textContent = "WIN" + " " + a[i][j].textContent;
                        zzz = size;
                    }
                    zzz--;
                }
                else {
                    zzz = size;
                    break;
                }
            }

        }
    }
}


restart.onclick = () => {
    for (let i = 1; i <= length; i++) {
        button[i].textContent = "";
    }
    finish.textContent = " ";
    q = 1;
    player = "X";
}














// let patasxan = document.getElementById('patasxan');
// let patasxanh1 = document.getElementById('patasxanh1');
// let h1 = document.querySelectorAll('h1');
// let playerpatasxan = document.getElementById('player');
// let clear = document.getElementById('clear');
// let nichya = document.getElementById('nichya');
// let haxtox = [
// [1, 2, 3],
// [1, 4, 7],
// [1, 5, 9],
// [2, 5, 8],
// [3, 6, 9],
// [3, 5, 7],
// [4, 5, 6],
// [7, 8, 9],
// ];
// 
// let step = 0;
// 
// for (let i = 0; i < 9; i++) {
// button[i].addEventListener('click', fun);
// }
// 
// 
// function fun() {
// if (!this.textContent) {
// this.innerHTML = player;
// chekwin();
// if (patasxanh1.textContent === 'WIN X' || patasxanh1.textContent === 'WIN O') {
// 
// button[i].textContent = '';
// playerpatasxan.textContent = '';
// nichya.textContent = '';
// }
// }
// else {
// alert('ayd dex arden lracvaca');
// hajord();
// }
// hajord();
// if (player === 'X') {
// playerpatasxan.textContent = 'Player X';
// } else {
// playerpatasxan.textContent = 'Player O';
// }
// step++;
// if (step === 8) {
// nichya.textContent = 'NICHYA';
// patasxanh1.textContent = '';
// playerpatasxan.textContent = '';
// }
// 
// }
// function hajord() {
// if (player === 'X') {
// player = 'O';
// }
// else {
// player = 'X';
// }
// }
// 
// 
// function chekwin() {
// 
// if ((button[0].textContent === 'X' && button[1].textContent === 'X' && button[2].textContent === 'X') ||
// (button[0].textContent === 'X' && button[3].textContent === 'X' && button[6].textContent === 'X') ||
// (button[0].textContent === 'X' && button[4].textContent === 'X' && button[8].textContent === 'X') ||
// (button[1].textContent === 'X' && button[4].textContent === 'X' && button[7].textContent === 'X') ||
// (button[2].textContent === 'X' && button[5].textContent === 'X' && button[8].textContent === 'X') ||
// (button[2].textContent === 'X' && button[4].textContent === 'X' && button[6].textContent === 'X') ||
// (button[3].textContent === 'X' && button[4].textContent === 'X' && button[5].textContent === 'X') ||
// (button[6].textContent === 'X' && button[7].textContent === 'X' && button[8].textContent === 'X')
// ) {
// patasxanh1.textContent = 'WIN X';
// playerpatasxan.textContent = '';
// }
// else if ((button[0].textContent === 'O' && button[1].textContent === 'O' && button[2].textContent === 'O') ||
// (button[0].textContent === 'O' && button[3].textContent === 'O' && button[6].textContent === 'O') ||
// (button[0].textContent === 'O' && button[4].textContent === 'O' && button[8].textContent === 'O') ||
// (button[1].textContent === 'O' && button[4].textContent === 'O' && button[7].textContent === 'O') ||
// (button[2].textContent === 'O' && button[5].textContent === 'O' && button[8].textContent === 'O') ||
// (button[2].textContent === 'O' && button[4].textContent === 'O' && button[6].textContent === 'O') ||
// (button[3].textContent === 'O' && button[4].textContent === 'O' && button[5].textContent === 'O') ||
// (button[6].textContent === 'O' && button[7].textContent === 'O' && button[8].textContent === 'O')
// ) {
// patasxanh1.textContent = 'WIN O';
// playerpatasxan.textContent = '';
// }
// 
// }
// 
// clear.onclick = () => {
// for (let i = 0; i < button.length; i++) {
// button[i].textContent = '';
// patasxanh1.textContent = '';
// playerpatasxan.textContent = '';
// nichya.textContent = '';
// }
// }
// 




