let cli=document.querySelectorAll(".boox");
let btn=document.querySelector(".btn");
let consider=true;
let gameOver=true;
const arr=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
cli.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(gameOver && box.innerText===""){
      if(consider){
        box.innerText="X";
        consider=false;
      }else{
        box.innerText="O";
        consider=true;
      }
    }
    checkWinner();
  });
});
const checkWinner=()=>{
  for(let pattern of arr){
    let p1=cli[pattern[0]].innerText;
    let p2=cli[pattern[1]].innerText;
    let p3=cli[pattern[2]].innerText;
    if(p1!==""&&p2===p1&&p2===p3){
      // console.log(`Winner is ${p1}`);
      let change=document.querySelector(".winner");
      change.innerText=`Winner is ${p1}`;
      change.style.display = "block";
      gameOver=false;
    }
  }
}
const reset=()=>{
  cli.forEach((box)=>{
    box.innerText="";
  });
  gameOver=true;
  consider=true;
  let change=document.querySelector(".winner");
  change.style.display = "none";
}
btn.addEventListener("click",reset);
