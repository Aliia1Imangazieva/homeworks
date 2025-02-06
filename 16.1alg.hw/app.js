function knapsackGreedy(items, capacity) {
    // 1. Вычисляем ценность (стоимость / вес) и сортируем по убыванию
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalWeight = 0;   // Текущий вес рюкзака
    let totalValue = 0;    // Текущая стоимость рюкзака
    let selectedItems = []; // Выбранные предметы

    for (let item of items) {
        if (totalWeight + item.weight <= capacity) { // Если влезает, берем полностью
            totalWeight += item.weight;
            totalValue += item.value;
            selectedItems.push(item);
        }
    }

    return { totalWeight, totalValue, selectedItems };
}

// Данные предметов: { номер, вес, стоимость }
const items = [
    { id: 1, weight: 2, value: 10 },
    { id: 2, weight: 3, value: 15 },
    { id: 3, weight: 5, value: 25 },
    { id: 4, weight: 7, value: 35 }
];

const capacity = 10;
const result = knapsackGreedy(items, capacity);

console.log("Выбранные предметы:", result.selectedItems);
console.log("Общий вес:", result.totalWeight);
console.log("Общая стоимость:", result.totalValue);