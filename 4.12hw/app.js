class Requests {
    constructor(baseURL = '', defaultHeaders = {}) {
      this.baseURL = baseURL; // Базовый URL для запросов
      this.defaultHeaders = defaultHeaders; // Заголовки по умолчанию
    }
  
    // Общий метод для выполнения запросов
    async request(endpoint, method, body = null, headers = {}) {
      const url = `${this.baseURL}${endpoint}`;
      const options = {
        method,
        headers: { ...this.defaultHeaders, ...headers },
      };
  
      if (body) {
        options.body = JSON.stringify(body); // Преобразование тела в JSON
      }
  
      try {
        const response = await fetch(url, options);
  
        // Проверка на успешный статус ответа
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
  
        // Возвращаем результат в виде JSON
        return await response.json();
      } catch (error) {
        console.error(`Ошибка запроса: ${error.message}`);
        throw error; // Повторно выбрасываем ошибку для обработки снаружи
      }
    }
  
    // Метод GET
    async get(endpoint, headers = {}) {
      return this.request(endpoint, 'GET', null, headers);
    }
  
    // Метод POST
    async post(endpoint, body, headers = {}) {
      return this.request(endpoint, 'POST', body, headers);
    }
  
    // Метод PUT
    async put(endpoint, body, headers = {}) {
      return this.request(endpoint, 'PUT', body, headers);
    }
  
    // Метод DELETE
    async delete(endpoint, headers = {}) {
      return this.request(endpoint, 'DELETE', null, headers);
    }
  }


  // Создаем экземпляр Requests с базовым URL и заголовками
const api = new Requests('https://jsonplaceholder.typicode.com', {
    'Content-Type': 'application/json',
  });
  
  // Пример использования методов
  (async () => {
    try {
      // GET запрос
      const posts = await api.get('/posts');
      console.log('Полученные посты:', posts);
  
      // POST запрос
      const newPost = await api.post('/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      console.log('Созданный пост:', newPost);
  
      // PUT запрос
      const updatedPost = await api.put('/posts/1', {
        title: 'updated title',
        body: 'updated body',
        userId: 1,
      });
      console.log('Обновленный пост:', updatedPost);
  
      // DELETE запрос
      const deleteResponse = await api.delete('/posts/1');
      console.log('Результат удаления:', deleteResponse);
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  })();