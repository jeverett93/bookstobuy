import React from "react";

function Resultform() {
    return (
        <form className="form-control">
            <h3>Results</h3>
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title</h5>
                    <p className="card-text">Authors</p>
                    <img />
                    <p className="card-text">Book Synopsis</p>
                    <button>View</button>
                    <button>Saved</button>
                </div>
            </div>
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title</h5>
                    <p className="card-text">Authors</p>
                    <img />
                    <p className="card-text">Book Synopsis</p>
                    <button>View</button>
                    <button>Saved</button>
                </div>
            </div>
        </form>
    );
}

export default Resultform;
