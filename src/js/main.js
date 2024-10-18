// Import all of Bootstrap's JS

import * as bootstrap from 'bootstrap'

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 100,
        image: "https://via.placeholder.com/200x120.png?text=Book+1"
    },
    
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 200,
        image: "https://via.placeholder.com/200x120.png?text=Book+2"
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 300,
        image: "https://via.placeholder.com/200x120.png?text=Book+3"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 400,
        image: "https://via.placeholder.com/200x120.png?text=Book+4"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 500,
        image: "https://via.placeholder.com/200x120.png?text=Book+5"
    }
    
];

const booksContainer = document.querySelector(".books-container");



function createElement(tag, classes = [], attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    if (textContent) element.textContent = textContent;
    return element;
}


function createBookCard(book) {
    const bookFooterElement = createElement('div', ['card-footer', 'd-flex', 'justify-content-between']);
    const viewDetailsButton = createElement('a', ['btn', 'btn-primary'], { href: '#' }, 'View Details');
    const buyNowButton = createElement('a', ['btn', 'btn-success'], { href: '#' }, 'Buy Now');
    bookFooterElement.appendChild(viewDetailsButton);
    bookFooterElement.appendChild(buyNowButton);

    const bookBodyElement = createElement('div', ['card-body']);
    const bookTitleElement = createElement('h5', ['card-title'], {}, book.title);
    const bookAuthorElement = createElement('h6', ['card-subtitle', 'mb-2', 'text-muted'], {}, `by ${book.author}`);
    const bookPriceElement = createElement('p', ['card-text', 'fw-bold'], {}, `₹${book.price}`);
    bookBodyElement.appendChild(bookTitleElement);
    bookBodyElement.appendChild(bookAuthorElement);
    bookBodyElement.appendChild(bookPriceElement);


    const bookColElement = createElement('div', ['col']);
    const bookCardElement = createElement('div', ['card', 'h-100']);
    const bookImageElement = createElement('img', ['card-img-top'], { src: book.image, alt: book.title });
    bookCardElement.appendChild(bookImageElement);
    bookCardElement.appendChild(bookBodyElement);
    bookCardElement.appendChild(bookFooterElement);

    
    bookColElement.appendChild(bookCardElement);

    return bookColElement;
    
}

books.forEach(book => {
    const card = createBookCard(book);
    booksContainer.appendChild(card);
});

// const card1 = createBookCard(books[0]);
// const card2 = createBookCard(books[1]);
// const card3 = createBookCard(books[2]);
// const card4 = createBookCard(books[3]);
// const card5 = createBookCard(books[4]);

// booksContainer.appendChild(card1);
// booksContainer.appendChild(card2); 
// booksContainer.appendChild(card3);
// booksContainer.appendChild(card4);
// booksContainer.appendChild(card5);
