import React from 'react'
const Number = function number(){
    const handleClick = (e)=>{
        localStorage.setItem("number", 22222); //value is not showing is null fix this
        let a = e.target.value;
        console.log(a);
   }
    return(
        
        <div>
            <div>This is Number</div>
            <input type = "number"></input>
            <button onClick = {(e)=>{handleClick(e)}} href="/"> </button>
            
        </div>


    );

}

export default Number;