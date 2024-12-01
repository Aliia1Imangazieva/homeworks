async function fetchData('https://jsonplaceholder.typicode.com/posts') {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error(`Ошибка: Сервер вернул статус ${response.status}`);
      }
  
      const data = await response.json(); 
      console.log('Данные с сервера:', data);
    } catch (error) {
      // Создаём новую ошибку с описанием "Сервер недоступен"
      console.error('Сервер недоступен:', error.message);
    }
  }
  