'use strict'

const btn=document.querySelector('.btn');
const image = document.querySelector('.img');

btn.addEventListener('click',function(){
  setTimeout(()=>{
    image.src='dice_1.png';
    setTimeout(()=>{
      image.src='dice_2.png';
    },2000)
  },2000)
})

