let input;
const numbers = [];
let total = 0;

while (true) {
  const input = prompt("Введіть число");

  if (!input) {
    break;
  }

  if (isNaN(Number(input))) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }
  numbers.push(Number(input));
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
}
