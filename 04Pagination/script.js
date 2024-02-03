let pageNo = document.querySelectorAll(".pageNumbers button");

let fB = document.querySelector(".fastBackward");
let back = document.querySelector(".backward");
let forw = document.querySelector(".forward");
let fF = document.querySelector(".fastForward");

pageNo.forEach( (e) => {
  e.addEventListener("click", function() {
    pageNo.forEach((e1,i) =>{
      if(this === e1){
        e1.classList.add("currPage");
        if(i>0) {
          fB.classList.remove("op");
          back.classList.remove("op");
          fB.disabled = false;
          back.disabled = false;
        }
        if(i<4){
          fF.classList.remove("op");
          forw.classList.remove("op");
          fF.disabled = false;
          forw.disabled = false;
        }
        if(i === 4) {
          forw.classList.add("op");
          fF.classList.add("op");
          fF.disabled = true;
          forw.disabled = true;
        }
        if(i === 0) {
          fB.classList.add("op");
          back.classList.add("op");
          fB.disabled = true;
          back.disabled = true;
        }
      }else{
        e1.classList.remove("currPage");
      }
    });
  })
})

fB.addEventListener("click", function() {
  for(let i=0;i<pageNo.length;i++) {
    if(i === 0)
      pageNo[i].classList.add("currPage");
    else 
      pageNo[i].classList.remove("currPage");
  }
  this.classList.add("op");
  back.classList.add("op");
  this.disabled = true;
  forw.disabled = true;
  fF.classList.remove("op");
  forw.classList.remove("op");
  fF.disabled = false;
  forw.disabled = false;
});

back.addEventListener("click",function() {
  if(pageNo[1].classList.contains("currPage")) {
    pageNo[1].classList.remove("currPage");
    pageNo[0].classList.add("currPage");
    fB.disabled = true;
    back.disabled = true;
    fB.classList.add("op");
    back.classList.add("op");
  }else{
    for(let i=2;i<pageNo.length;i++) {
      if(pageNo[i].classList.contains("currPage")) {
        pageNo[i].classList.remove("currPage");
        pageNo[i-1].classList.add("currPage");
        fF.disabled = false;
        forw.disabled = false;
        fF.classList.remove("op");
        forw.classList.remove("op");
        break;
      }
    }
  }
}); 

forw.addEventListener("click", function() {
  if(pageNo[pageNo.length-2].classList.contains("currPage")) {
    pageNo[pageNo.length-2].classList.remove("currPage");
    pageNo[pageNo.length-1].classList.add("currPage");
    fF.disabled = true;
    forw.disabled = true;
    fF.classList.add("op");
    forw.classList.add("op");
  } else {
    for(let i=0;i<pageNo.length-2;i++) {
      if(pageNo[i].classList.contains("currPage")) {
        pageNo[i].classList.remove("currPage");
        pageNo[i+1].classList.add("currPage");
        fB.disabled = false;
        back.disabled = false;
        fB.classList.remove("op");
        back.classList.remove("op");
        break;
      }
    }
  }
});

fF.addEventListener("click", function() {
  for(let i=0;i<pageNo.length;i++) {
    if(i === (pageNo.length - 1))
      pageNo[i].classList.add("currPage");
    else 
      pageNo[i].classList.remove("currPage");
  }
  this.classList.add("op");
  forw.classList.add("op");
  this.disabled = true;
  forw.disabled = true;
  fB.classList.remove("op");
  back.classList.remove("op");
  fB.disabled = false;
  back.disabled = false;
});

// one thing that I can do is, make a global variable that stores the index of pageNo array and a function that runs and updates the disabled of buttons and adds or remove op class.