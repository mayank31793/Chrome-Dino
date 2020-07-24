var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate')
    },500);
}

function start(){
    block.classList.add('block');
    block.style.animation = "block 1.5s infinite";
    block.style.display = "block";
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if(blockLeft< 100 && blockLeft>0 && characterTop >= 250){
        block.style.animation = "none";
        // block.style.display = "none";
        alert("Game Over");
    }
},10);