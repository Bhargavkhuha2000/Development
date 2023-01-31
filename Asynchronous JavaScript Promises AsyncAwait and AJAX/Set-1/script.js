/*In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time �
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating �
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474*/
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

const whereAmI = function(lat,lng){
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(er=>{
  console.log(er);
  if(!er.ok) throw new Error(`Error is ${er.status}`);
  return er.json()
}).then(data=> {
    console.log(data);
    console.log(`you are in ${data.city},${data.country}`);
    return fetch(`https://restcountries.com/v2/name/${data.country}`)
  }).then(Response=>{
    if(!Response.ok) throw new Error(`country not fount (${Response.status})`);
    return Response.json();
  }).then(data=>renderData(data[0]))
  .catch(err=>console.log(`${err.message}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);