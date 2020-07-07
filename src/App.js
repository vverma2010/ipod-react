import React from 'react';
import './App.css';
import Ipod from "./Ipod.js";

class App extends React.Component
{

  // to render whole app
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
