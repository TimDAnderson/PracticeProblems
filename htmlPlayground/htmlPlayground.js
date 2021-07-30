console.log('hi')
let element = document.getElementById('button')
console.log(element)
document.getElementById('button').addEventListener('click', () => {
  console.log('got a click')
  document.getElementById("popUp").innerHTML = "Hello World";
})

const parent = document.querySelector('parent');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

parent.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}