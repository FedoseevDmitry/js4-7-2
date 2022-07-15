const botNumber = Math.floor(Math.random() * 101);

let botFlag = false;

while (botFlag === false) {
  let userNumber = Number(prompt('Я загадал число, введите свое от 0 до 100: ', 0));

  if ((userNumber !== botNumber) && (userNumber > botNumber)) {
    alert('Вы не угадали, попробуйте еще раз. Загаданное число меньше.')
  } if ((userNumber !== botNumber) && (userNumber < botNumber)) {
    alert('Вы не угадали, попробуйте еще раз. Загаданное число больше.')
  } if (userNumber === botNumber) {
    botFlag = true;
  }
};

alert(`Поздравляю, вы угадали число ${botNumber}`);