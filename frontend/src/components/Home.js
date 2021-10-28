import React from 'react'

const Home = function(){

    return(
        <div className="bg-dark text-white">

        <div className="p-3 mb-3 bg-dark text-white">.bg-dark</div>
        <form id = "search" method="post" action="/p">
        <div className="custom input-group mb-3">
            <input type=" text" className=" cs form-control" placeholder="Enter Category" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button type="submit" form ="search" className="btn btn-outline-light">Light</button>
        </div>
        </form>
        </div>
    );

}

export default Home;