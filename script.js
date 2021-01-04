// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = "🎉 "+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "  + " 🎉";
    document.title = "🎉 "+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "  + " 🎉";

    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "00d 00h 00m 00s";
  }
}, 1000);
