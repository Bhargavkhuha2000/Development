'use strict';

const dice = document.querySelector('.dice');
//dice.src = `dice_${randomNumber}.png`;

const p1CScore = Number(document.querySelector('.p1CScore').textContent);
const p2CScore = Number(document.querySelector('.p2CScore').textContent);

const p1TScore = Number(document.querySelector('.p1TScore').textContent);
const p2TScore = Number(document.querySelector('.p2TScore').textContent);

// document.querySelector('.swipe').addEventListener('click',function(){
//     c
//     console.log(randomNumber);
//     dice.src = `dice_${randomNumber}.png`;
//     sum +=randomNumber;
//     p1CScore.textContent=sum;
//     console.log(sum);
//     temp =sum;
// });
var sum1=0;
var sum2=0;
let i =1;
const p1=document.querySelector('.swipe').addEventListener('click',function(){
    const randomNumber = Number(Math.trunc(Math.random()*6)+1);
    dice.src = `dice_${randomNumber}.png`;
    
        if(i%2!=0)
        {
           sum1 += randomNumber;
          document.querySelector('.p1CScore').textContent =sum1;
          i++;
        } else if(i%2==0){
            sum2 +=randomNumber;
           document.querySelector('.p2CScore').textContent=sum2;
           i++;
      }
    

});
document.querySelector('.stop').addEventListener('click',function(){
    if(i%2!=0)
    {
        
        if(document.querySelector('.p1CScore').textContent > document.querySelector('.p2CScore').textContent)
        {
            document.querySelector('.p1TScore').textContent = sum1;
            document.querySelector('.p2TScore').textContent = sum2;
            document.querySelector('.msg').textContent = 'Player 1 is Won The Game';
        }
        else{
            document.querySelector('.p1TScore').textContent = sum1;
            document.querySelector('.p2TScore').textContent = sum2;
            document.querySelector('.msg').textContent = 'Player 2 is Won The Game';
        }
    }else{
        document.querySelector('.msg').textContent='Please Swipe The Dice One More Time';
    } 
    });

    document.querySelector('.clear').addEventListener('click',function(){
        sum1=0;
        sum2=0;
        document.querySelector('.p1CScore').textContent =0;
        document.querySelector('.p2CScore').textContent =0;
    })
    