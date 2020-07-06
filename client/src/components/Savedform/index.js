import React from "react";

function Savedform() {
    return (
        <form className="form-control">
            <h3>Saved Books</h3>
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title</h5>
                    <p className="card-text">Authors</p>
                    <img />
                    <p className="card-text">Book Synopsis</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">Book Title</h5>
                    <p className="card-text">Authors</p>
                    <img />
                    <p className="card-text">Book Synopsis</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
            </div>
        </form>
    );
}

export default Savedform;
