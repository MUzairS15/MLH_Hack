import Home from "./components/Home";
import Content from "./components/Content";
import Number from "./components/Number";
import Game from "./components/Game";
import './App.css'

const App = function App() {
if(localStorage.getItem("number") === null){
    return (<Number />)
}
const mouseMovement = function(e){

    const ele = document.getElementById("msg");
    const position = document.getElementById("num").getBoundingClientRect();
    const left = position.left + 50;
    const top = position.top;
    const X = e.clientX;
    const Y = e.clientY;
    let message;

    if( Math.abs(left - X) < 100 && Math.abs(top - Y) < 37){
      message = "NEAR";
    }else if(Math.abs(X - left) > 100 && Math.abs(X - left) < 400 && Math.abs(Y - top) >37 && Math.abs(Y - top) < 400){
        message = "FAR";
    }else {
        message = "VERY FAR";
    }
     ele.innerHTML = `<p>${message}</p>`;
    // setTimeout(() => {
    //     ele.innerHTML = "";
    // }, 600);
}
 return (
        <div id = "main" onMouseMove={mouseMovement}>
            <Home />
            <Game />
            <Content />
            <div id= "msg"></div>
        </div>
    )
}

export default App;
