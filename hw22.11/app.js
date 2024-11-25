// zadanie 1
function  isPowerOfTwo(n) {
    if (n > 0 && (n & (n - 1)) === 0) {
      return "yes";
    } else {
      return "no";
    }
  }
  
  // Примеры
  console.log(isPowerOfTwo(1));  // yes (2^0 = 1)
  console.log(isPowerOfTwo(2));  // yes (2^1 = 2)
  console.log(isPowerOfTwo(3));  // no
  console.log(isPowerOfTwo(16)); // yes (2^4 = 16)
  console.log(isPowerOfTwo(18)); // no

  // zadanie 2
  function sumofnatural(n) {
if(n === 0) return 0;
return (n %10) + sumofnatural (Math.floor(n / 10));
  }

  const number = 179;
  const number1 = 985;
  console.log(sumofnatural(number));
  console.log(sumofnatural(number1));

  // zadanie 3
// Рекурсивная функция для вычисления n-го числа Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n; // Базовые случаи
    return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивное вычисление
  }
  
  // Функция для вывода чисел Фибоначчи до n-го элемента
  function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i));
    }
  }
  
  // Пример использования
  printFibonacci(10); // Вывод: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

  function isPalindrome(str) {
    function check(left, right) {
      if (left >= right) return true; // Базовый случай: строка "сужена" до 1 символа или пустая
      if (str[left] !== str[right]) return false; // Несовпадение символов
      return check(left + 1, right - 1); // Рекурсивная проверка
    }
  
    // Приводим строку к нижнему регистру и удаляем лишние символы
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return check(0, cleanStr.length - 1);
  }
  
  // Пример использования
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
