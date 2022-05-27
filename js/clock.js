setInterval(showTime, 1000);
/*
document.getElementById("button").addEventListener("click", showTime) */
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;

    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

/* function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh > 12){
        session = "PM";
     }

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;

     let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    var t = setTimeout(function(){ currentTime() }, 1000);

  }

currentTime(); */


/*
x) Style the clock to look nicer, animate it, etc.
x) Sync clock up with system/client time
x) Display AM/PM values

todo
4) Button to display military time (24 hour time)
5) Create controls to set an alarm -> play alarm sound effect once time is reached
6) Display time using a clock face
7) Pause/Resume clock controls (buttons) */