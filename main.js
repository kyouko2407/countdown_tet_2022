let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date("2022 Feb 01 00:00:00");
let endTime = endDate.getTime();
var now = new Date().getTime();
var distance = endDate - now;
function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;
  
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime <= todayTime) {
    Run();
    var audio = new Audio("./happy_new_year.mp3");
    audio.play();
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>HAPPY NEW YEAR</h1>`;
    
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();


$('#stop_sakura').on('click', function() {
  $('body').sakura('stop');
});




/*function countdown() {
  document.getElementById('title').innerText='NEW YEAR COUNT DOWN'
  var countDownDate = new Date("2022  Feb 01 00:00:00").getTime();
  var sayTime = new Date("2021 Dec 31 23:59:49").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var audio = new Audio("./countdownsound.mp3");
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day-box").innerHTML = "<span>" + days + "</span>";
    document.getElementById("hr-box").innerHTML = "<span>" + hours + "</span>";
    document.getElementById("min-box").innerHTML = "<span>" + minutes + "</span>";
    document.getElementById("sec-box").innerHTML = "<span>" + seconds + "</span>";
    // If the count down is finished, write some text
    if (now - (now % 1000) == sayTime) {

      audio.play();
    }
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("container").innerHTML = "<h1>HAPPY NEW YEAR <br> <span>2022</span> </h1>";
      var audio = new Audio("./song.mp3");
      audio.play();
      Run();

    }

  }, 1000);
}

countdown();
*/