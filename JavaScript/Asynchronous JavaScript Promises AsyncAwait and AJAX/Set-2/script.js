'use strict';

//const btn=document.querySelector('.btn');
// const image = document.querySelector('.img');

// btn.addEventListener('click',function(){
//   setTimeout(()=>{
//     image.src='dice_1.png';
//     setTimeout(()=>{
//       image.src='dice_2.png';
//       setTimeout(()=>{
//         image.src='';
//       },2000)
//     },2000)
//   },2000)
// })

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector('.image');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

let currentImg;

createImage('dice_1.png')
  .then((img) => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('dice_2.png');
  })

  .then((img) => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch((err) => console.log(err));
