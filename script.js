let box=document.querySelectorAll(".btn");
let resetbtn=document.querySelector(".reset");
let newG=document.querySelector(".new");
let msgc=document.querySelector(".msgc");
let msg=document.querySelector("#msg");
let turnO=true;
let winning =false;
let count=0;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5], [6,7,8]];//stores all winning permutation
//Following reset () enables all the button make the winning false and count of button clicked to be zero and hide the class
const reset=()=>{
    turnO=true;
    enablebutton();
    count=0;
    msgc.classList.add("hide");
   
winning=false;
}
//Following draw(0 is use to print draw message in case of draw and hide the hidden class
const draw=()=>
    {
        msg.innerText = `DRAW`;
        msgc.classList.remove("hide");
        
        
    }
//Following function carries out themain function that is writing of x and o based on the player and checking who wins or the match draws
box.forEach((btn)=>
{
    btn.addEventListener("click",()=>{
        count++;
        if(turnO==true)
        {
            btn.style.color='#EAEAEA';
            btn.innerText="O";

            turnO=false;
        }
        else
        { btn.style.color='#73628A'
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
       
        check();
        if(winning==false&&count==9)
        draw();
        
    })
});
const enablebutton=()=>{
    for(let b of box)
    {
        b.disabled=false;
        b.innerText="";
    }
}
const disablebutton=()=>{
    for(let b of box)
        b.disabled=true;
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgc.classList.remove("hide");//makes thhe hidden class visible
    disablebutton();
}

const check=()=>{
    for(let pattern of win)
    {

    let v1=box[pattern[0]].innerText;
let v2=box[pattern[1]].innerText;
let v3=box[pattern[2]].innerText;
if(v1!=""&&v2!=""&&v3!="")
{
    if(v1===v2&&v2===v3)
       {
        winning =true;
        showWinner(v1);
        
       }

}

    }
}
newG.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);
