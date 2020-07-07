import React, { useState } from "react";
import Textbox from "../components/Textbox";
import Resultform from "../components/Resultform";
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearch] = useState("")

    const searchBooks = () => {
        API.search(searchTerm).then(res => {
            console.log(res.data)
            setBooks(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleInputChange = (event) => {
        const {value} = event.target
        setSearch(value)
    }

    return (
        <>
            <Textbox 
                handleInputChange = {handleInputChange}
                name = "title"
                searchTerm = {searchTerm}
                onClick = {searchBooks}
            />
            {/* map function */}
            <Resultform />
        </>
    );
}


export default Search;
