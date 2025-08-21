const cells = document.querySelectorAll(".cell");


const resetButton = document.getElementById("reset-btn");


const newGameButton = document.getElementById("new-btn");


const showMessage = document.querySelector(".show-winner")


const container = document.querySelector(".container");


const resetContainer = document.querySelector(".reset-game");


const winMessage = document.getElementById("win-msg");



const winPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];


const checkWinner = ()=>{
    for(let pattern of winPattern){
        
        let pos1 = cells[pattern[0]].innerHTML;
        let pos2 = cells[pattern[1]].innerHTML;
        let pos3 = cells[pattern[2]].innerHTML;

       
        

        if(pos1 || pos2 || pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                winMessage.innerHTML = `<h1>Congratulation winner is "${pos1}"! 🏆 🎉 🥳</h1>`;
                container.classList.add("hide");
                resetContainer.classList.add("hide");
                showMessage.classList.remove("hide");
            }
        }
    }
}


isXturn = true;

let moves = 0;

showMessage.classList.add("hide");


cells.forEach(function(cell){
    cell.addEventListener("click",function(){
        moves++;

        if(moves === 9){
            container.classList.add("hide");
            resetContainer.classList.add("hide");
            showMessage.classList.remove("hide");
            winMessage.innerHTML = `<h1>GAME DRAW , TRY AGAIN !😐 🤝</h1>`;

        }else{
            showMessage.classList.add("hide");
            container.classList.remove("hide");
            resetContainer.classList.remove("hide");
        }
        
        if(cell.innerHTML === ""){
            cell.disabled = false;

            if(isXturn === true){
            cell.innerHTML = "X";
            isXturn = false;
            
            }else{
                cell.innerHTML = "O";
                isXturn = true;
            
            }

        }else{
            cell.disabled = true;
        }

        checkWinner();
    })
})


resetButton.addEventListener("click", function(){
    cells.forEach(function(cell){
        cell.innerHTML = "";
    })
    moves = 0;
    isXturn = true;
})


newGameButton.addEventListener("click",function(){
    cells.forEach(function(cell){
        cell.innerHTML = "";
    })
    moves = 0;
    isXturn = true;
    showMessage.classList.add("hide");
    container.classList.remove("hide");
    resetContainer.classList.remove("hide");
})







