import React from "react";

// inline styling
const styles = {
    border: "none",
    input: {
        border: "solid 0.5px #007bff",
        marginBottom: "10px"
    }
};

// component for search bar and button
function Textbox(props) {
    return (
        <div className="card" style={styles}>
            <div className="card-body">
                <input
                    className="form-control"
                    onChange={props.handleInputChange}
                    value={props.search}
                    style={styles.input}
                    placeholder="Enter Book Title"
                />
                <button
                    className="btn-primary btn-container btn"
                    onClick={props.onClick}
                    style={{ borderRadius: "5px" }}>
                    Search
                </button>
            </div>
        </div>
    );
}

// exporting component to be used in other parts of application
export default Textbox;
