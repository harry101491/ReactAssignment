import React from "react";

const UserOutput = (props) => {
    return (
        <div>
            <p style={ props.style } >
                { props.username }
            </p>
        </div>
    );
};

export default UserOutput;