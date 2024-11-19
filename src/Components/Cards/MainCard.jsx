import React from "react";
import './Card.css';
import MainChildCard from "./MainChildCard";
// import IMG from ;


const MainCard = () => {
    return (
        <div className="cardbody">
            <div className="mainchildcardbody" >
                <MainChildCard />
            </div>
            <div className="mypic" >
                <img src='./mypic.png' alt="Avatar" width="310px"  />
            </div>

        </div>
    );
}

export default MainCard;
