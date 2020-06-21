import React from 'react';
import './App.css';
import Ipod from "./Ipod.js";

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <h1>IPod</h1>
        <Ipod/>
      </div>
    );
  }
}

export default App;
