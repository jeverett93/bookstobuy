import React from "react";

const styles = {
    backgroundColor: "white",
    color: "#007bff",
    fontStyle: "italic"
};

function Jumbotron() {
    return (
        <div className="jumbotron text-center" style={styles}>
            <h1 className="display-4">Books to Buy</h1>
            <p className="lead">Search for and Save the Books You Want.</p>
        </div>
    );
}

export default Jumbotron;
