// zadanie b
function extendArray(originalArray, numNewElements) {
    // Клонируем оригинальный массив
    const newArray = [...originalArray];

    // Генерируем новые элементы и добавляем их в массив
    for (let i = 0; i < numNewElements; i++) {
        const newElement = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
        newArray.push(newElement);
    }

    return newArray;
}

// Пример использования
const initialArray = [1, 2, 3, 4, 5];
const numberOfNewElements = 3;

const extendedArray = extendArray(initialArray, numberOfNewElements);
console.log("Исходный массив:", initialArray);
console.log("Новый массив:", extendedArray);


// zadanie - level 2

class DynamicArray {
    constructor(initialCapacity = 10) {
        this.capacity = initialCapacity; // Начальная ёмкость
        this.array = new Array(this.capacity);
        this.size = 0; // Текущий размер
    }

    add(element) {
        // Проверяем заполненность массива
        if ((this.size / this.capacity) >= 0.6) {
            this._resize(); // Увеличиваем ёмкость
        }

        // Добавляем элемент
        this.array[this.size] = element;
        this.size++;
    }

    _resize() {
        this.capacity *= 2; // Увеличиваем ёмкость в 2 раза
        const newArray = new Array(this.capacity);

        // Копируем элементы
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }

        this.array = newArray; // Обновляем массив
    }
}

// Пример использования
const dynamicArray = new DynamicArray();
for (let i = 0; i < 20; i++) {
    dynamicArray.add(i);
    console.log(`Добавлен элемент ${i}, размер: ${dynamicArray.size}, ёмкость: ${dynamicArray.capacity}`);
}
