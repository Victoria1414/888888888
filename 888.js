const readline = require('readline');

// Функция для вычисления суммы цифр чисел от 1 до num
function sumOfDigits(num) {
    let sum = 0;
    let factor = 1;
    let lower = 0;

      while (num > 0) {
        let currentDigit = num % 10;
        let upper = Math.floor(num / 10);

         sum += upper * 45 * factor;
         sum += (currentDigit * (currentDigit - 1) / 2) * factor;
         sum += currentDigit * (lower + 1);

          lower += currentDigit * factor;
          factor *= 10;
          num = upper;
    }

           return sum;
}

// Основная функция для обработки ввода и вывода
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout,
     terminal: false
    });

    rl.on('line', (line) => {
     const [lowerBound, upperBound] = line.split(' ').map(Number);

        if (lowerBound === 0) {
         console.log(sumOfDigits(upperBound));
        } else {
         console.log(sumOfDigits(upperBound) - sumOfDigits(lowerBound - 1));
        }
    });
}

main();
