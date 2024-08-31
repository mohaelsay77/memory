let startGame = document.querySelector(".start-game");
startGame.onclick = function(){
    let yourName = prompt("What Is Your Name");
    document.querySelector(".name span").innerHTML=yourName;
    startGame.classList.add("go")
}

let blocks =document.querySelectorAll(".blocks .block");
let blocksArray=Array.from(blocks);
console.log(blocksArray);

// let blocksArrayNum=Array.from(blocksArray.length.keys())
console.log(blocks.length);
let orderRange = [...Array(blocks.length).keys()];
console.log(orderRange);

shuffle(orderRange);
console.log(orderRange);

let duration =2000;

let tries =document.querySelector(".tries span");
console.log(tries);
let wrongTries=0;


blocksArray.forEach((block,index)=>{
    block.style.order = orderRange[index];
    block.addEventListener("click",e=>{
        e.target.classList.add("flipped");
        e.target.parentElement.classList.add("flipped");
        setTimeout(()=>{
            e.target.classList.remove("flipped");
            e.target.parentElement.classList.remove("flipped");

        },duration)

        let allFlippedBlocks =blocksArray.filter(flippedblock=>flippedblock.classList.contains("flipped"));
        if(allFlippedBlocks.length ===2){
            document.querySelector(".blocks").classList.add("no-clicking");

            setTimeout(()=>{
                document.querySelector(".blocks").classList.remove("no-clicking");
    
            },duration)

            if(allFlippedBlocks[0].dataset.mohamed === allFlippedBlocks[1].dataset.mohamed){
                allFlippedBlocks[0].classList.remove("flipped");
                allFlippedBlocks[1].classList.remove("flipped");

                allFlippedBlocks[0].classList.add("fix");
                allFlippedBlocks[1].classList.add("fix");
                console.log("mohamed");

                let good=document.createElement("div");
                    let goodText=document.createTextNode("Congratz");
                    good.classList.add("good");
                    good.appendChild(goodText);
                    document.body.appendChild(good);

                setTimeout(() => {
                    good.classList.remove("good");
                    good.innerHTML="";

                },1000)
                
            }else{
                wrongTries++;
                tries.innerHTML=wrongTries;
                document.querySelector(".fail").play();

                if(wrongTries ===10){
                    let gameOver=document.createElement("div");
                    let gameOverText=document.createTextNode("Game Over");
                    gameOver.classList.add("game-over");
                    gameOver.appendChild(gameOverText);
                    document.body.appendChild(gameOver);
                    document.querySelector(".blocks").classList.add("no-click");

                    let replay=document.createElement("div");
                    let replayText=document.createTextNode("Replay");
                    replay.classList.add("replay");
                    replay.appendChild(replayText);
                    document.body.appendChild(replay);

                document.querySelector(".you-lose").play();


                    replay.onclick=function(){
                        location.reload();
                    }

                    let endGame=document.createElement("div");
                    gameOver.classList.add("end-game");
                    document.body.appendChild(endGame);
                }

            }

        }
        
        
    })
})

function shuffle(){
    let current =orderRange.length;
    while(current > 0){
     let random = Math.floor(Math.random() * current);
        current--;
        // console.log(current);

        temp =orderRange[current];
        orderRange[current]=orderRange[random];  
        orderRange[random] = temp;

    } {
        return orderRange;
    }
}
shuffle();
console.log(shuffle());

// let replayGame=document.querySelector(".replay");
// console.log(replayGame)



