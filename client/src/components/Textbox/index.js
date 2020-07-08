import React from "react";

function Textbox(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Book Search</h5>
                <p className="card-text">Book Title</p>
                <input
                    className="form-control"
                    onChange={props.handleInputChange}
                    value={props.search}
                />
                <button onClick={props.onClick}>Search</button>
            </div>
        </div>
    );
}

export default Textbox;
