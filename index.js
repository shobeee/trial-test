const books = document.getElementById('books');
const titleE = document.getElementsByClassName('title');
const authorE = document.getElementsByClassName('author');
const add = document.getElementById('add');
const bookList = JSON.parse(localStorage.getItem('library'));
const errorMsg = document.getElementById('error-msg');
const libraryBooksEl = document.querySelector('.library-books');
class Shelf{
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }

// addBtn = () => {
    add.addEventListener('click', () => {
       const title = titleE.value;
       const author = authorE.value;
    if(title&&author) {
        const newBook = {title,author};
        bookList.push(newBook);
        localStorage.setItem('library',JSON.stringify(bookList));
    }
    else {
        errorMsg.innerHTML = 'Some input is missing';
    }
    });
// }
    renderBooks = () => {
        if(!bookList.length) {
            libraryBooksEl.innerHTML = 'There are no books added'
        }
        
        else {
            let markup = '';
            bookList.forEach((book,index) => {
            markup += `<div class='books-div' style="background-color:${index % 2 && 'rgb(255,233,233)'}">
            <p class='book-title'>${book.title}</p><span>by </span>
            <p class='book-author'>${book.author}</p></div>
            <button type='button' class='remove-btn' id=${index}>Remove</button>`  
        });
        books.innerHTML = markup; 
        }
        const removeBook = ()=> {
            const removeBtn = [...document.getElementsByClassName('remove-btn')];
            removeBtn.forEach((item)=>{
                item.addEventListener('click', (e)=> {
                    bookList.splice(e.target.id,1);
                    localStorage.setItem('library',JSON.stringify(bookList));
                        this.renderBooks();
                });
            });

        };
        removeBook();
    }

    
}
const awesomebooks = new Shelf();
awesomebooks.addBtn;
awesomebooks.renderBooks;

