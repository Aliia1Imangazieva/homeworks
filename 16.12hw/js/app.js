// Объект корзины
const cart = {
    items: [
      { name: 'Laptop', price: 1000 },
      { name: 'Phone', price: 500 },
      { name: 'Headphones', price: 100 },
    ],
    discount: 0.1, // Скидка 10%
    getTotal() {
      // Используем this для доступа к свойствам объекта
      return this.items.reduce((total, item) => total + item.price, 0);
    },
    getDiscountedTotal() {
      // Используем this для расчета стоимости с учетом скидки
      return this.getTotal() * (1 - this.discount);
    },
  };
  
  // Отдельная функция для вывода итогов
  function printTotals(currencySymbol) {
    console.log(`${currencySymbol}${this.getTotal()} - полная стоимость`);
    console.log(`${currencySymbol}${this.getDiscountedTotal()} - со скидкой`);
  }
  
  // Пример использования call
  console.log('Используем call:');
  printTotals.call(cart, '$');
  
  // Пример использования apply
  console.log('Используем apply:');
  printTotals.apply(cart, ['€']);
  
  // Пример использования bind
  console.log('Используем bind:');
  const printCartTotals = printTotals.bind(cart, '₽');
  printCartTotals();

  // Задание 2  Функция для выполнения сетевого запроса
function fetchUserData(apiEndpoint) {
  console.log('Выполняем запрос:', apiEndpoint);
  
  // Выполняем запрос к API
  fetch(apiEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка сети: ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Получены данные пользователя:', data);
    })
    .catch((error) => {
      console.error('Ошибка запроса:', error.message);
    });
}

// Объект с информацией о текущем состоянии
const appState = {
  userLoggedIn: true,
  profileOpened: true,
  apiEndpoint: '/me',
  startRequest: function () {
    // Проверяем условия (логин и открытый профиль)
    if (this.userLoggedIn && this.profileOpened) {
      fetchUserData.call(this, this.apiEndpoint); // Запускаем запрос методом call
    } else {
      console.log('Запрос не может быть выполнен: пользователь не вошел или профиль не открыт.');
    }
  },
};

// Запускаем процесс
appState.startRequest();