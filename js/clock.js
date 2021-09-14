function clock() {
    var date = new Date();
    var hrs = date.getHours(); // 0 - 23
    var mins = date.getMinutes(); // 0 - 59
    var secs = date.getSeconds(); // 0 - 59
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
    
    var vrijeme = hrs + ":" + mins + ":" + secs;
    document.getElementById("Time").innerText = vrijeme;
    document.getElementById("Time").textContent = vrijeme;
    setTimeout(clock, 1000);
}
clock();