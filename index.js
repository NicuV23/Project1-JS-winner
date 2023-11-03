const buttons = document.querySelectorAll('.button');
const messageElement = document.getElementById('message');
let messageDisplayed = false;

// Generare index buton câștigător la încărcarea paginii
const winningButtonIndex = getRandomNumber();

function getRandomNumber() {
  return Math.floor(Math.random() * buttons.length);
}

function handleButtonClick(event) {
  const buttonIndex = Array.from(buttons).indexOf(event.target);

  if (!messageDisplayed) {
    if (buttonIndex === winningButtonIndex) {
      messageElement.textContent = 'Winner';
    } else {
      messageElement.textContent = 'Try again';
    }
    messageDisplayed = true;
  } else {
    messageElement.textContent = '';
    messageDisplayed = false;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
