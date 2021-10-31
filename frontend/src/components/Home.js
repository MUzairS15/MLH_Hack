import React from 'react'

const Home = function () {

    const handleClick = () => {
        console.log("5");
        fetch('/message', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstParam: localStorage.getItem("number")
            })
          })
    }

    return (
        <div className="bg-dark text-white main ">

            <div className="p-3 mb-3 bg-dark text-white" id="box">.bg-dark</div>
            <form id="search" method="post" action="/message">
                <div className="custom input-group mb-3">
                    <input type=" text" className=" cs form-control" placeholder="Enter Category" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button type="submit" onClick={handleClick} form="search" className="btn btn-outline-light">Light</button>
                </div>
            </form>
        </div>
    );

}

export default Home;