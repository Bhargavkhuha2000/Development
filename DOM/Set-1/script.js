'use strict';
const randomNumber = Math.trunc(Math.random()*20)+1;

const check = document.querySelector('.check');
let txt; 
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
//console.log(highscore);
check.addEventListener('click',function(){
    
    txt = Number(document.querySelector('.number').value);
    //console.log(txt , typeof);
    if(!txt)
    {
        document.querySelector('.start').textContent='no number';

    }if(score>1){

    
     if(txt > randomNumber){
        score--;
        document.querySelector('.score').textContent=score;
        
        document.querySelector('.start').textContent = 'too high..';
    } else if(txt < randomNumber){
        score--;
        document.querySelector('.score').textContent=score;

        document.querySelector('.start').textContent = 'too low..';
    } else if(txt === randomNumber){
        document.querySelector('.start').textContent = 'You Guess the number...';
        
        document.querySelector('.guess').textContent = 
        randomNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score>highscore)
        {
           highscore = score;
           document.querySelector('.highscore').textContent=highscore; 
        }
    }
}
else{
    document.querySelector('.start').textContent = 'opps score is 0..';
}

});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = 'white';  
    document.querySelector('.start').textContent = 'Start Guessing';

    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').textContent = '?';
    txt.textContent = '';
})