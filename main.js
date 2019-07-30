const show = document.querySelector('.showcase');
const hide = document.querySelector('.toggle')
const caseStatus = document.querySelector('.case2')


let ourStatus = 1

hide.addEventListener('click', function(){
    if(ourStatus===1){
        show.style.visibility = 'visible';
        caseStatus.style.height = "100%"
        ourStatus = 0
    }else{
        show.style.visibility = 'hidden';
        caseStatus.style.height = "0%"
        ourStatus = 1;
    }
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}