const buttons = document.querySelectorAll('.button');
const messageElement = document.getElementById('message');
const tryAgainButton = document.getElementById('try-again');
let messageDisplayed = false;
let winningButtonIndex = getRandomNumber();
let clickedButtonIndex;

function getRandomNumber() {
  return Math.floor(Math.random() * buttons.length);
}

function handleButtonClick(event) {
  if (!messageDisplayed) {
    buttons.forEach(button => {
      button.style.backgroundColor = 'red';
      button.disabled = true;
    });

    clickedButtonIndex = Array.from(buttons).indexOf(event.target);

    if (clickedButtonIndex === winningButtonIndex) {
      messageElement.textContent = 'Winner';
    } else {
      messageElement.textContent = 'Try again';
    }

    tryAgainButton.style.display = 'inline';
    messageDisplayed = true;

    buttons[winningButtonIndex].style.backgroundColor = 'green';
  }
}

function handleTryAgainClick() {
  buttons.forEach(button => {
    button.style.backgroundColor = '';
    button.disabled = false;
  });

  messageElement.textContent = '';
  messageDisplayed = false;
  winningButtonIndex = getRandomNumber();
  tryAgainButton.style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

tryAgainButton.addEventListener('click', handleTryAgainClick);
tryAgainButton.style.display = 'none';
