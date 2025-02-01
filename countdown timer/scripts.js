let timerInterval;

function startCountdown() {
    const userDate = document.getElementById("userDate").value;
    const targetDate = new Date(userDate).getTime();

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = 
            `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "GLORY";
            notifyUser("TIME IS UP!");
        } else {
            checkMilestones(distance);
        }

        animateTimer();
    }, 1000);
}

function checkMilestones(distance) {
    if (distance <= 30 * 60 * 1000 && distance > 30 * 60 * 1000 - 1000) {
        notifyUser("30 minutes left!");
    } else if (distance <= 60 * 60 * 1000 && distance > 60 * 60 * 1000 - 1000) {
        notifyUser("1 hour left!");
    } else if (distance <= 24 * 60 * 60 * 1000 && distance > 24 * 60 * 60 * 1000 - 1000) {
        notifyUser("1 day left!");
    }
}

function notifyUser(message) {
    alert(message);
}

function animateTimer() {
    const timer = document.getElementById("timer");
    timer.style.transform = "scale(1.1)";
    setTimeout(() => {
        timer.style.transform = "scale(1)";
    }, 500);
}
