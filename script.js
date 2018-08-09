var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function getRandom() {
  return (
    '#' +
    (function co(lor) {
      return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][
        Math.floor(Math.random() * 16)
      ]) && lor.length == 6
        ? lor
        : co(lor);
    })('')
  );
  //return "#"+ Math.floor(Math.random()*16777215).toString(16); //did not work, would return 000000 often
}

function setGradient() {
  body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ' )';

  css.textContent = body.style.background + ';';
}
function randomize() {
  color1.value = getRandom();
  color2.value = getRandom();
  setGradient();
}

window.addEventListener('load', randomize); //match background colors to input values on page load, "randommed"

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
