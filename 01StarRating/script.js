let arrOfStar = document.querySelectorAll(".bx");
arrOfStar.forEach( (e,i) => {
  e.addEventListener( "click" , rate(i) );
});
function rate(v) {
  return function() {
    arrOfStar.forEach( (e,i1) => {
      if(i1 <= v) {
        e.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    } );
  }
}