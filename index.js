
function currentTime() {
  let date = new Date(); //display the current date and time .
  let hh = date.getHours(); //display the current hour.
  let mm = date.getMinutes(); //display the current min.
  let ss = date.getSeconds(); //display the current sec.
  let session = "AM"; //display the am status.

  if (hh == 0) {
    //display day start time 0 = 12.
    hh = 12;
  }
  if (hh > 12) {
    // display the  pm status.
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh; //if hour is singal digit add left side zero
  mm = mm < 10 ? "0" + mm : mm; //if min is singal digit add left side zero
  ss = ss < 10 ? "0" + ss : ss; //if sec is singal digit add left side zero

  let time = hh + ":" + mm + ":" + ss + session; // Declere a variable  for time 

  document.getElementById("time").innerText = time; 
  // Timeout event  for recall the function every 1 sec
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
