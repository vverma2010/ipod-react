import React from 'react';
import './ipod.css';
import Img from './play.png';
import Forward from './fast-forward.svg';
import Backward from './backward.svg';


// control buttons setup
const Controls = (props) => {
    return (
        <div className="outer">
            <div className="buttons" id="outercircle" onClick={props.rotate}>
                <div className="menu" onClick={props.screen}>
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

                <div className="centerButton" onClick={props.centerB}>

                </div>
            </div>
        </div>
    );
}




export default Controls;