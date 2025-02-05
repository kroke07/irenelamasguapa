const messages = [
    "Como que no?",
    "Seguro?",
    "Va porfas",
    "Bb porfavores",
    "venga, lo pasamos muy bien",
    "Si dices que no lloro",
    "Y nos comemos y dps una hamburguesa tmb",
    "Venga que la anterior es planazo",
    "Bueno vale, ya paro",
    "seguro?¿😢❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}