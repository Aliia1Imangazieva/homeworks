function mergeSortDescending(arr) {
    // Базовый случай: если массив состоит из 1 элемента, он уже отсортирован
    if (arr.length <= 1) {
      return arr;
    }
  
    // Разделяем массив на две половины
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Рекурсивно сортируем обе половины
    const sortedLeft = mergeSortDescending(left);
    const sortedRight = mergeSortDescending(right);
  
    // Сливаем две отсортированные половины
    return mergeDescending(sortedLeft, sortedRight);
  }
  
  function mergeDescending(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Объединяем два массива в порядке убывания
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) { // Сравнение для убывания
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Добавляем оставшиеся элементы
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Пример использования:
  const grades = [3, 8, 1, 9, 4, 2, 7, 6, 5];
  const sortedGrades = mergeSortDescending(grades);
  console.log("Отсортированный список:", sortedGrades);