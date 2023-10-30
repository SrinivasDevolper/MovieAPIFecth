let Clock = document.getElementById('clockID');
setInterval(function() {
    let time = new Date();
    let seconds = time.getSeconds();
    let Minutes = time.getMinutes();
    let Hours = time.getHours();
    let day = "AM";
    if (Hours > 12) {
        Hours = Hours - 12;
        day = "PM";
    }
    if (Hours === 0) {
        Hours = 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    if (Hours < 10) {
        Hours = "0" + Hours;
    }
    Clock.textContent = Hours + ":" + Minutes + ":" + seconds + ": " + day;
    Clock.onclick = function() {
        alert(Hours + "Hours" + ", " + Minutes + "Minutes" + ", " + seconds + "seconds" + ", " + day);
    }
});