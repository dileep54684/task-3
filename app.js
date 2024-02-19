let grid = document.querySelectorAll('.grid');
console.log(grid);


let turnO = true;





grid.forEach((box) => {

   box.addEventListener("click",function start(){

    if(turnO){
        box.innerText="O";
        turnO=false;
    }

    else{
        box.innerText="X";
        turnO=true;
    }});
    



});







