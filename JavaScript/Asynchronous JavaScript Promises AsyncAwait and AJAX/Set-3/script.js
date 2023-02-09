'use strict';

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

const loadPause = async function () {
  try {
    let img = await createImage('dice_1.png');
    console.log('Image 1 is found');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('dice_2.png');
    console.log('Image 2 is found');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
loadPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => {
      return await createImage(img);
    });
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['dice_1.png', 'dice_2.png', 'dice_3.png']);
