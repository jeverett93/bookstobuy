import React from "react";

// inline styling for jumbotron on top of page
const styles = {
    backgroundColor: "white",
    color: "#007bff",
    fontStyle: "italic"
};

// jumbotron
function Jumbotron() {
    return (
        <div className="jumbotron text-center" style={styles}>
            <h1 className="display-4">Books to Buy</h1>
            <p className="lead">Search for and Save the Books You Want.</p>
        </div>
    );
}

// exporting component to be used in other parts of application
export default Jumbotron;
