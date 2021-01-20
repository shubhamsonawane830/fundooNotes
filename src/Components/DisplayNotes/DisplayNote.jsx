import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import styles from './DisplayNote.style';

const DisplayNote = (props) => {
    return (
        <>
        <div className="Addnote shadow p-3 mb-5 bg-white rounded float-left ml-5" style={{margin: "0 auto", width: "300px"}} >
        <div class="col-md-12">
            <h1> { props.title} </h1>
            <br />
            <p> {props.content} </p>
            <button className="btn" >

            </button>
        </div>
        </div>
        </>
    );
}

export default DisplayNote;
