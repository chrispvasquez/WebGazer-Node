var num = 0;
let square = document.getElementById('button')
square.addEventListener("click", function() {
  square.classList.add('active-animation');
  var timer = setInterval(function() {
    num = num + 1;
    square.innerText = num.toString()
    if (num >= 50) {
      clearInterval(timer);
      $(".text").text("Done!")
      //$(".text").css('display', 'inline-block');
    }
  
  }, 1000);
});