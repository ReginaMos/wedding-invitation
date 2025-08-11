const numbersTimer = document.querySelectorAll('.number');
const weddingDate = new Date(Date.UTC(2025, 9, 3, 18, 30, 0));

function updateTimer() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    const correctTime = [ 
        Math.floor(timeDifference / (1000 * 60 * 60 * 24)), //days
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), //hours
        Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),  //minutes
        Math.floor((timeDifference % (1000 * 60)) / 1000)  //seconds
    ]

    numbersTimer.forEach((item, idx) => item.innerHTML = correctTime[idx]);
}

setInterval(updateTimer, 1000);