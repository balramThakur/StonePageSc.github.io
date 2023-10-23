let rock_paper_scissor={
    "stone":"stone.png",
    "paper":"paper.png",
    "scissor":"scissor.png"
}

console.log("hello world");
let score=0;
let decison=document.getElementById("decision");

function pickuserhand(hand) {
    let hands=document.getElementById("hands");
    hands.style.display="none";
    
    let result=document.getElementById("result")
    result.style.display="flex";
    // console.log(hand);
    
    document.getElementById("userpick").src= rock_paper_scissor[hand];
    computerpick(hand);
}

function computerpick(hand) {
    let hands=['stone','paper','scissor']
    let randompick=hands[Math.floor(Math.random() * hands.length)];
    
    document.getElementById("systempick").src=rock_paper_scissor[randompick];
    ref(hand,randompick);
}

function ref(userhand,rpick) {
    if (userhand=='stone' && rpick =='paper') {
        decison.innerHTML="You Loss!"
        setScore(0);
        console.log("Paper won!");
    }
    if (userhand=='paper' && rpick =='stone') {
        decison.innerHTML="You won!";
        setScore(score+1);
        console.log("Paper won!");
    }
    if (userhand=="stone" && rpick=="scissor") {
        decison.innerHTML="You Won!";
        setScore(score+1);
        console.log("Stone won!"); 
    }
    if (userhand=='scissor' && rpick=='stone') {
        decison.innerHTML="You Loss!";
        setScore(0);
        console.log("stone won!");  
    }   
    if (userhand=='paper' && rpick=='scissor') {
        decison.innerHTML="You Loss!";
        setScore(0);
        console.log("Scissor won!");  
    }    
    if (userhand=='scissor' && rpick=='paper') {
        decison.innerHTML="You won!"
        setScore(score+1);
        console.log("scissor won!");  
    }   
    if (userhand=='paper' && rpick=='paper') {
        decison.innerHTML="Tie";
        console.log("Tie!!");
    }
    if (userhand=='scissor' && rpick=='scissor') {
        decison.innerHTML="Tie"
        console.log("Tie!!");
    }
    if (userhand=='stone' && rpick=='stone') {
        decison.innerHTML="Tie"
        console.log("Tie!!");
    }
}

let newGame=document.getElementById("btn");
newGame.addEventListener("click",function () {
    let hands=document.getElementById("hands");
    hands.style.display="flex";
    
    let result=document.getElementById("result")
    result.style.display="none";
})

// function setScore(newScore,decision) {
//     score=newScore;
//     let num=document.getElementById("num");
//         num.innerText=newScore;
   
// }
