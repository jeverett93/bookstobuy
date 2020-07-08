import React, { useState, useEffect } from "react";
import Savedform from "../components/Savedform";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([])
    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    const loadBooks = () => {
        API.getBooks()
            .then(res =>{
                console.log(res.data)
                setBooks(res.data)}
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }
    return (
        <>
        {books.map((book, index) => (
            <Savedform
                key={index}
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                delete={() => {
                    deleteBook(book._id);
                }}
            />
            ))}
        </>
    );
}

export default Saved;
