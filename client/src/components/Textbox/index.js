import React from "react";

function Textbox() {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Book Search</h5>
                <p className="card-text">Book Title</p>
                <input className="form-control"/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Textbox