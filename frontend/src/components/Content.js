const Content = function () {

    let info = ["This is content","This is another content"];
    return (
        <div className="row">
                {info.map((data)=>(
            <div key = {data} className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <p>{data}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
                ))}
        
        </div>
    );
}

export default Content;