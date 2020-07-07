import React from "react";

function Resultform(props) {
    return (
        <form className="form-control">
            <h3>Results</h3>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
    <h5 className="card-title">Book Title: {props.title}</h5>
    <p className="card-text">Authors: {props.authors}</p>
                    <img image={props.image}/>
                    <p className="card-text">Book Synopsis: {props.authors}</p>
                    <button href={props.link}>View</button>
                    <button>Saved</button>
                </div>
            </div>
        </form>
    );
}

export default Resultform;
