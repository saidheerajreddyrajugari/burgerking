import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from './Components/NavBar/nav';
import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';
import data from './jb.js';
import CopyRight from './Components/CopyRight/CopyRight.jsx';
import Footer from './Components/Footer/Footer.jsx';
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <NavBar/>
        <Home/>
        <div style={{height: "1100px",width: "80%",marginLeft: "190px", marginTop: "60px",display: "flex",flexWrap: "wrap",justifyContent: "space-around"}}>
            {data.map(x=>{
                return( <Cards src={x.src} alt ={x.alt} h2={x.h2} p={x.p} button ={x.button}/>)
            })}
        </div>
        <CopyRight/>
        <Footer/>
    </>
)
