const jsConfetti = new JSConfetti();

// Array of texts for the No button
const noButtonTexts = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart!",
];

let noButtonIndex = 0;

// Yes Button functionality
document.getElementById('yesButton').addEventListener('click', function () {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden');
    jsConfetti.addConfetti({
        emojis: ['💖', '💕', '💌', '🌸', '🎉'],
        emojiSize: 50,
        confettiNumber: 100,
    });

    // Increase the size of the Yes button
    const yesButton = document.getElementById('yesButton');
    const currentWidth = parseFloat(window.getComputedStyle(yesButton).width);
    const currentHeight = parseFloat(window.getComputedStyle(yesButton).height);
    const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.width = `${currentWidth + 20}px`;
    yesButton.style.height = `${currentHeight + 10}px`;
    yesButton.style.padding = `${currentPadding + 5}px`;
    yesButton.style.fontSize = `${currentFontSize + 2}px`; // Increase font size
});

// No Button functionality
document.getElementById('noButton').addEventListener('click', function () {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Cycle through the texts
    noButton.textContent = noButtonTexts[noButtonIndex];
    noButtonIndex = (noButtonIndex + 1) % noButtonTexts.length;

    // Shrink the No button
    const currentNoWidth = parseFloat(window.getComputedStyle(noButton).width);
    const currentNoHeight = parseFloat(window.getComputedStyle(noButton).height);
    const currentNoPadding = parseFloat(window.getComputedStyle(noButton).padding);
    const currentNoFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);

    if (currentNoWidth > 50) { // Prevent the button from becoming too small
        noButton.style.width = `${currentNoWidth - 10}px`;
        noButton.style.height = `${currentNoHeight - 5}px`;
        noButton.style.padding = `${currentNoPadding - 2}px`;
    }

    // Ensure the font size doesn't go below 10px
    if (currentNoFontSize > 10) {
        noButton.style.fontSize = `${currentNoFontSize - 1}px`; // Decrease font size
    }

    // Grow the Yes button
    const currentYesWidth = parseFloat(window.getComputedStyle(yesButton).width);
    const currentYesHeight = parseFloat(window.getComputedStyle(yesButton).height);
    const currentYesPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    const currentYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.width = `${currentYesWidth + 20}px`;
    yesButton.style.height = `${currentYesHeight + 10}px`;
    yesButton.style.padding = `${currentYesPadding + 5}px`;
    yesButton.style.fontSize = `${currentYesFontSize + 2}px`; // Increase font size
});