let sub = document.querySelector(".decrease");
let add = document.querySelector(".increase");
let count = document.querySelector(".dis");

let countValue = count.innerText;

add.addEventListener( "click" , increaseValue );
sub.addEventListener( "click" , decreaseValue );

function increaseValue() {
  countValue = countValue < 9? `0${++countValue}` : ++countValue;
  count.innerText = countValue;
}
function decreaseValue() {
  if(countValue > 1) {
    countValue = countValue <= 10? `0${--countValue}` : --countValue;
    count.innerText = countValue;
  }
}