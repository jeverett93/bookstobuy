import React from "react";

function Savedform(props) {
    console.log(props)
    return (
        <div>
            <h3>Saved Books</h3>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title: {props.title}</h5>
                    <p className="card-text">Authors: {props.authors}</p>
                    <img alt="book-cover" src={props.image}/>
                    <p className="card-text">Book Synopsis: {props.description}</p>
                    <button className="btn-primary">
                    <a target="_blank" rel="noopener noreferrer" href={props.link}>
                        View
                    </a>
                </button>
                <button className="btn-primary" onClick={props.delete}>Delete
                </button>
                </div>
            </div>
        </div>
    );
}

export default Savedform;
