const books = [
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        year: 2017,
        genre: "Contemporary Fiction"
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        year: 2018,
        genre: "Mystery Fiction"
    },
    {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        year: 2011,
        genre: "Historical Fiction"
    },
    {
        title: "Circe",
        author: "Madeline Miller",
        year: 2018,
        genre: "Fantasy Fiction"
    },
    {
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        year: 2020,
        genre: "Fantasy Romance"
    },
    {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        year: 2021,
        genre: "Science Fiction"
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        year: 2020,
        genre: "Fantasy Fiction"
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        year: 2021,
        genre: "Science Fiction"
    },
    {
        title: "The Guest List",
        author: "Lucy Foley",
        year: 2020,
        genre: "Thriller"
    },
    {
        title: "Normal People",
        author: "Sally Rooney",
        year: 2018,
        genre: "Contemporary Fiction"
    },
    {
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        year: 2019,
        genre: "Epic Fantasy"
    },
    {
        title: "Educated",
        author: "Tara Westover",
        year: 2018,
        genre: "Memoir"
    }
];

function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    bookCard.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        <div class="book-year">Published: ${book.year}</div>
        <div class="book-genre">${book.genre}</div>
    `;
    
    return bookCard;
}

function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    
    books.forEach((book, index) => {
        const bookCard = createBookCard(book);
        
        bookCard.style.animationDelay = `${index * 0.1}s`;
        bookCard.classList.add('fade-in');
        
        booksGrid.appendChild(bookCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});