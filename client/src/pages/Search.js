import React, { useState } from "react";
import Textbox from "../components/Textbox";
import Resultform from "../components/Resultform";
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearch] = useState("");

    const searchBooks = () => {
        API.search(searchTerm)
            .then(res => {
                setBooks(res.data);
                console.log("data: ", res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const saveBook = bookData => {
        API.saveBook({
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors ? bookData.volumeInfo.authors : "No authors found",
            description: bookData.volumeInfo.description
                ? bookData.volumeInfo.description
                : "No synopsis found",
            image: bookData.volumeInfo.imageLinks
                ? bookData.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/150.png?text=No+Image+Found",
            link: bookData.volumeInfo.infoLink
        })
            .then(res => console.log("saved"))
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setSearch(value);
    };

    return (
        <div className="container">
            <Textbox
                handleInputChange={handleInputChange}
                name="title"
                searchTerm={searchTerm}
                onClick={searchBooks}
            />
            <form>
                {books.map((book, index) => (
                    <Resultform
                        key={index}
                        title={book.volumeInfo.title}
                        authors={
                            book.volumeInfo.authors ? book.volumeInfo.authors : "No authors found"
                        }
                        description={
                            book.volumeInfo.description
                                ? book.volumeInfo.description
                                : "No synopsis found"
                        }
                        image={
                            book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.thumbnail
                                : "https://via.placeholder.com/150.png?text=No+Image+Found"
                        }
                        link={book.volumeInfo.infoLink}
                        save={() => {
                            saveBook(book);
                        }}
                    />
                ))}
            </form>
        </div>
    );
}

export default Search;
