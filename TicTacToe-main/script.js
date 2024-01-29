document.addEventListener("DOMContentLoaded", function() {
    // Hide Game Screen
    document.getElementById("game-screen").style.display = "none";

    //"Play Game" button
    document.getElementById("human").addEventListener("click", function() {
        // Hide Home Screen
        document.getElementById("home-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
    });

});

let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;


boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            Win();
            Draw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function Win(){
    let winConditions = [

        //Padagdag nalang huhu masyadong madami pota

        //1st ROW WINS - HORIZONTAL
        [0, 1, 2], [3, 4, 5], [1, 2, 3], [2, 3, 4],  
        //2nd ROW WINS - HORIZONTAL
        [6, 7, 8], [9, 10, 11], [7, 8, 9], [8, 9, 10], 
        //3rd ROW WINS - HORIZONTAL
        [12, 13, 14], [15, 16, 17], [13, 14, 15], [14, 15, 16],
        //4th ROW WINS - HORIZONTAL
        [18, 19, 20], [21, 22, 23], [19, 20, 21], [20, 21, 22],
        //5th ROW WINS - HORIZONTAL
        [24, 25, 26], [27, 28, 29], [25, 26, 27], [26, 27, 28]


    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#FF2E63"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function Draw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})