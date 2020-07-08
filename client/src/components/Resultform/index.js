import React from "react";

function Resultform(props) {
    return (
        <div>
            <h3>Results</h3>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title: {props.title}</h5>
                    <p className="card-text">Authors: {props.authors}</p>
                    <img alt="book-cover" src={props.image} />
                    <p className="card-text">Book Synopsis: {props.description}</p>
                    <div className="btn-container" role="button">
                        <a
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.link}>
                            View
                        </a>
                    </div>
                    <div
                        className="btn-container btn btn-primary"
                        role="button"
                        onClick={props.save}>
                        Save
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resultform;
