import React, { useState } from "react";
import Textbox from "../components/Textbox";
import Resultform from "../components/Resultform";
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearch] = useState("")

    const searchBooks = () => {
        API.search(searchTerm).then(res => {
            setBooks(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const saveBook = (bookData) => {
        API.saveBook({
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.infoLink
        })
            .then(res => console.log('saved'))
            .catch(err => console.log(err));
    }

    const handleInputChange = (event) => {
        const { value } = event.target
        setSearch(value)
    }

    return (
        <>
            <Textbox
                handleInputChange={handleInputChange}
                name="title"
                searchTerm={searchTerm}
                onClick={searchBooks}
            />

            {books.map((book, index) => (
                <Resultform
                    key={index}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    save={() => {
                        saveBook(book);
                    }}
                />
            ))}

        </>
    );
}


export default Search;
