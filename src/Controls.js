import React from 'react';
import './ipod.css';
import Img from './play.png';
import Forward from './fast-forward.svg';
import Backward from './backward.svg';
// import {fontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import 

const Controls = (props) => {
    return (
        <div className="buttons">
            <div className="menu">
                MENU
            </div>
            
            <div className="fast-backward">
                <img src= {Backward} alt="Fast-back"/>
            </div>
            <div className="fast-forward">
                <img src = {Forward} alt = "Fast-for" />

            </div>
            <div className="play-pause">
                <img src={Img} alt="play/pause"/>
            </div>

            <div className="centerButton">

            </div>
        </div>
    );
}




export default Controls;