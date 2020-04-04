import React from 'react';
import logo from './logo.svg';
import {Button} from 'react-materialize';
import './App.css';
import DisplaySwitcher from './DisplaySwitcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id = "headerBanner">
          <h>Stony Brook University Center for Civic Justice</h>
          <p>SBU Voting</p>
        </div>
           <DisplaySwitcher/>
      </header>
    </div>
  );
}

export default App;
