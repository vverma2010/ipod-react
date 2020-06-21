import React from 'react';
import './ipod.css';
import Screen from './Screen.js';
import Controls from './Controls.js';


class Ipod extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            "display": ["Cover","Games","Settings"]
        }
    }
    render()
    {
        return(
            <div className="Ipod">
            <Screen displayItems = {this.state.display} />
            <Controls/>
            </div>
        );
    }
}

export default Ipod;