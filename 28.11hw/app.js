// zadanie 1
function findKthElement(arr1, arr2, k) {
    let i = 0; 
    let j = 0; 
    let count = 0; // Счётчик текущей позиции
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        count++;
        if (count === k) return arr1[i];
        i++;
      } else {
        count++;
        if (count === k) return arr2[j];
        j++;
      }
    }
  
    while (i < arr1.length) {
      count++;
      if (count === k) return arr1[i];
      i++;
    }
  
    while (j < arr2.length) {
      count++;
      if (count === k) return arr2[j];
      j++;
    }
  
    return -1; // В случае, если k больше, чем количество элементов в объединённом массиве
  }

  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  console.log(findKthElement(arr1, arr2, k));

  // zadanie 2
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const less = arr.slice(1).filter(char => char < pivot);
    const greater = arr.slice(1).filter(char => char >= pivot);
  
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
  const input = "poiuytrewqlkjhgfdsamnbvcxz";
  const upperCaseArray = input.toUpperCase().split("");
  
  // Сортируем массив и объединяем обратно в строку
  const sortedString = quickSort(upperCaseArray).join("");
  
  console.log(sortedString);