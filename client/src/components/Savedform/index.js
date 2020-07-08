import React from "react";

function Savedform(props) {
    console.log(props);
    return (
        <div>
            <h3>Saved Books</h3>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title: {props.title}</h5>
                    <p className="card-text">Authors: {props.authors}</p>
                    <img alt="book-cover" src={props.image} />
                    <p className="card-text">Book Synopsis: {props.description}</p>
                    <a target="_blank" rel="noopener noreferrer" href={props.link}>
                        <div className="btn-container btn btn-primary" role="button">
                            View
                        </div>
                    </a>
                    <div
                        className="btn-container btn btn-primary"
                        role="button"
                        onClick={props.delete}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Savedform;
