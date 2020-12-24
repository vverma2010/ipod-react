import React from 'react';
import './ipod.css';
import Screen from './Screen.js';
import Controls from './Controls.js';
import ZingTouch from 'zingtouch';


class Ipod extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Menu:true,
            album:false,
            songs:true,
            artist:false
        }
    }

    // control rotation
    rotateCon=(e) => {
        let angle = 0;
        const target = document.getElementById('outercircle');
        const region = new ZingTouch.Region(e.target);
        region.bind(target,'rotate',(e)=> {

            angle = angle + e.detail.distanceFromLast;
            console.log(angle);
            if(angle < 120 && this.state.Menu===true)
            {
                let songs = document.getElementById('songs');
                songs.style.backgroundColor = "Teal";
                songs.style.color = "white";

                let album = document.getElementById('album');
                album.style.backgroundColor="whitesmoke";
                album.style.color = "indianred";

                let artist = document.getElementById('artist');
                artist.style.backgroundColor = "whitesmoke";
                artist.style.color = "indianred";


                this.setState({
                    Menu: true,
                    songs:true,
                    album:false,
                    artist:false
                })
            }

            if(angle < 240 && angle > 120 && this.state.Menu===true)
            {
                let album = document.getElementById('album');
                album.style.backgroundColor="teal";
                album.style.color = "white";

                let songs = document.getElementById('songs');
                songs.style.backgroundColor = "whitesmoke";
                songs.style.color = "indianred";

                let artist = document.getElementById('artist');
                artist.style.backgroundColor = "whitesmoke";
                artist.style.color = "indianred";

                this.setState({
                    Menu: true,
                    songs: false,
                    album: true,
                    artist: false
                })
            }

            if(angle < 360 && angle > 240 && this.state.Menu===true)
            {
                let artist = document.getElementById('artist');
                artist.style.backgroundColor = "teal";
                artist.style.color = "white";

                let songs = document.getElementById('songs');
                songs.style.backgroundColor = "whitesmoke";
                songs.style.color = "indianred";

                let album = document.getElementById('album');
                album.style.backgroundColor="whitesmoke";
                album.style.color = "indianred";

                this.setState({
                    Menu: true,
                    songs: false,
                    album: false,
                    artist: true
                })
            }
        })
    }
    // control click
    enter = (props) => {
        if(this.state.Menu === true && this.state.songs === true)
        {
            this.setState({Menu: false});


            let window = document.getElementById('mainWindow');
            let list = document.getElementById('list');
            list.style.visibility ="hidden";
            list.style.display = "none";

            let image = document.createElement('img');
            image.id = "image-screen";

            image.setAttribute("src",require('./player.jpg'));
            image.style.height = "100%";
            image.style.width = "100%";

            window.appendChild(image);   
        }

        if(this.state.Menu === true && this.state.artist === true)
        {
            this.setState({Menu: false});

            let window = document.getElementById("mainWindow");
            let list = document.getElementById('list');
            list.style.visibility = "hidden";
            list.style.display = "none";

            let image = document.createElement('img');
            image.id = "image-screen";

            image.setAttribute("src",require('./artists-list.png'));
            image.style.height = "100%";
            image.style.width = "100%";
            image.style.borderRadius = "10px";

            window.appendChild(image);
        }

        if(this.state.Menu === true && this.state.album === true)
        {
            this.setState({Menu: false});

            let window = document.getElementById("mainWindow");
            let list = document.getElementById('list');
            list.style.visibility = "hidden";
            list.style.display = "none";

            let image = document.createElement('img');
            image.id = 'image-screen';

            image.setAttribute("src",require('./album-list.jpg'));
            image.style.height = "100%";
            image.style.width = "100%";
            image.style.borderRadius = "10px";

            window.appendChild(image);
        }
    }

    // control return button
    itemClick = (props) => {
        if(this.state.Menu === false)
        {
            let back = document.getElementById('image-screen');
            back.remove();
            let menuList = document.getElementById('list');
            menuList.style.visibility = "visible";
            menuList.style.display = "block";
            
            this.setState({
                Menu: true,
                songs: false,
                album: false,
                artist: false
            })
        }
    }

    // renders the components into the screen
    render()
    {
        return(
            <div className="Ipod">
            <Screen displayItems = {this.state.display} />
            <Controls rotate={this.rotateCon} screen={this.itemClick} centerB={this.enter} />
            </div>
        );
    }
}

export default Ipod;