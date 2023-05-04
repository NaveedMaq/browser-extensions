function getCurrentTime() {
    let currentDateTime = new Date();
    let hr = currentDateTime.getHours();
    let ampm = "AM";

    if (hr == 0) {
        hr = 12;
    } else if (hr > 12) {
        hr = hr - 12;
        ampm = "PM"
    }
    hr = hr.toString().padStart(2, '0');
    let min = currentDateTime.getMinutes().toString().padStart(2, '0');
    let sec = currentDateTime.getSeconds().toString().padStart(2, '0');
    return [hr, min, sec, ampm];
}

function updateTime() {
    const hrDiv = document.getElementById('hr');
    const minDiv = document.getElementById('min');
    const secDiv = document.getElementById('sec');
    const ampmDiv = document.getElementById('ampm');

    setInterval(() => {
        let currentTime = getCurrentTime();
        hrDiv.innerText = currentTime[0];
        minDiv.innerText = currentTime[1];
        secDiv.innerText = currentTime[2];
        ampmDiv.innerText = currentTime[3];
    }, 1000);

}

updateTime();