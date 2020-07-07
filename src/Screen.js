import React from 'react';
import './ipod.css';
import './Screen.css';
// import ZingTouch from 'zingtouch';   


const Screen = (props) => {
    return(
        <div className="screen" id="mainWindow">
            <div id="list">
                <ul>
                    <li className="select" id="songs">Songs</li>
                    <li id="album">Album</li>
                    <li id="artist">Artist</li>
                </ul>
            </div>

        </div>
    );
}

export default Screen;