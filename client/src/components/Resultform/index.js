import React from "react";

const styles = {
    media: {
        marginBottom: "50px",
        border: "solid 1px #007bff"
    },
    mediaBody: {
        margin: "10px"
    },
    p: {
        fontWeight: "bolder"
    }
}

function Resultform(props) {
    return (
        <div>
            <div className="media" style={styles.media}>
            <img alt="book-cover" className="mr-3" src={props.image} style={styles.mediaBody}/>
                <div className="media-body" style={styles.mediaBody}>
                    <h5 className="mt-0">{props.title}</h5>
                    <p className="card-text">Authors: {props.authors}</p>
                    <p className="card-text">Synopsis: {props.description}</p>
                    <a target="_blank" rel="noopener noreferrer" href={props.link} style={styles.mediaBody}>
                        <div className="btn-container btn btn-primary" role="button">
                            View
                        </div>
                    </a>
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
