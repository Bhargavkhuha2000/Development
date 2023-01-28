'use strict'

const btn=document.querySelector('.btn');
const countriescontainer = document.querySelector('.countries');
const renderData = function(data){
const html=`
  <img src="${data.flag}" class="img" height="150" width="200"><br>
        
  <h3>Name</h3>
  <p class="name">${data.name}</p>
  <h3>Region</h3>
  <p class="region">${data.region}</p>
  <h3>Population</h3>
  <p class="pop">${(+data.population/1000000).toFixed(1)}</p>
  <h3>Language</h3>
  <p class="lag">${data.languages[0].name}</p>
  <h3>Currencies</h3>
  <p class="cur">${data.currencies[0].name}</p>`;

  countriescontainer.insertAdjacentHTML('beforeend',html);
}
// const countryData = function(con){

// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v2/name/${con}`);
// request.send();


  
//   request.addEventListener('load',function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderData(data);

//     const [neighbour] = data.borders;
//     if(!neighbour) return;
//     const request2 = new XMLHttpRequest();
// request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load',function(){
//   const data2 = JSON.parse(this.responseText);
//   console.log(data2);
//   renderData(data2);
//   })
//   });
// }

const getCountryData = function(country){
  fetch(`https://restcountries.com/v2/name/${country}`).then(response=> response.json()
  ).then(data=>{
    renderData(data[0])
    const neighbour = data[0].borders[0];
    if(!neighbour) return;
    return fetch(`https://restcountries.com/v2/name/${neighbour}`);
  })
  .then(response=>response.json())
  .then(data=>renderData(data[0]));
}
btn.addEventListener('click',()=>getCountryData('portugal'));
//countryData('portugal');
