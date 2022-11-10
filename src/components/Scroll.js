import React from "react";

const Scroll = (props) => {
    return (
    <div style={{overflowY: 'scroll', height: '75vh', padding: '50px'}}>
        {props.children}   
    </div>
    )

};

export default Scroll;