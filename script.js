let turn ="X";
let gameOver=false;

// function to change turn
const changeTurn=()=>{
    return turn ==="X"?"O":"X";
}


// function to check a win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +"  WON";
            gameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
        }

    })

}


// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(ele=>{
    let boxtext=ele.querySelector('.boxtext');
    ele.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
            }
        }
    })
})



// add onclick listner to reset button

reset.addEventListener('click',(ele)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(ele=>{
        ele.innerText="";
    });
    turn ='X';
    gameOver=false;
    document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})