
const books = [
    {tittle:"Harry Poter",
     author:"J.K.Rowling",
     year:2001,
     pages:5653
    },
    {tittle:"The Da Vinchi ",
        author:"Dan Brown",
        year:1996,
        pages:1009
    },
    {tittle:"The Twiligth Saga",
        author:"Stephenie Mayer",
        year:2005,
        pages:875
    },
    {tittle:"The Lord of the Rings",
     author:"J.R.R.Tolkien",
     year:2003,
     pages:1235
    }
];
console.log(books);

const newbook = [];

const newbooks = prompt("Какую книгу добавить в список?");

if (newbooks) {
    books.push(newbooks);

    console.log(books);
} else {
    console.log ("Название книги не было введено!");
}

