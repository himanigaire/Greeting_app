document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greetingMessage = "";
    let day="";

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning";
        day="Have a Good Day";
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = "Good Evening";
    } else {
        greetingMessage = "Good Night";
        day="Sweet Dreams";
    }

    if (name) {
        greetingElement.textContent = `${greetingMessage}, ${name}! ${day}`;
    } else {
        greetingElement.textContent = `${greetingMessage}!`;
    }
});
