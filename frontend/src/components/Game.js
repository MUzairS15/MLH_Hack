import React, { useEffect, useState } from "react";
const Game = function(){

    const onChange = function(){
        console.log(document.getElementById("num").value);
    }
    const [cstyle, setStyle] = useState();
    let style;
    useEffect(()=>{
        style = {
            position: "absolute",
            top :  Math.random() * 180,
            left : Math.random() * 1400,
            backgroundColor: "red",

        }
        // console.log(`top:${top} left:${left}`)
        setStyle(style);
    },[style])
   return(
   <button id = "num" className="btn btn-outline-light" style={cstyle} type = "number" onChange = {onChange}>BREAK JINX</button>
   )

}

export default Game