import React from "react";

// navigation bar component
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Books to Buy
            </a>
            <a className="navbar-brand" href="/">
                Search
            </a>
            <a className="navbar-brand" href="/saved">
                Saved
            </a>
        </nav>
    );
}

// exporting component to be used in other parts of application
export default Navbar;
