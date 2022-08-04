import React from "react";
import "./homestyles.css"
import TopBar from "../Build/TopBar";
import Footer from "../Build/Footer";

function Home(){
    return(
        <div>
            <TopBar/>
            <img src={require('../../assets/ErisTransparente.png')}/>
            <Footer/>
        </div>
    );
}

export default Home;
