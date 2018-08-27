import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label>UserName: </label>
            <input onChange={ props.change } type="text" value={ props.defaultName }/>
        </div>
        
    );
};

export default UserInput;