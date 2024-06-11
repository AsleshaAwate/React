import React from "react";
import "../styles/inlinestyling.css";

const InlineStyling = () =>{
    const styles={color:"red", fontSize:"90px"};

    return(
        <>
            <h1 style={{color:"blue", fontSize:"100px"}}>Inline Styling</h1>
            <h1 style={styles}>Inline Styling</h1>
            <h2 className="colorgreen">Testing Class</h2>
            <h2 id="colorpurple">Testing ID</h2>
        </>
    );
}

export default InlineStyling;