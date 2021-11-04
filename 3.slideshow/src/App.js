import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './App.css';
import People from './People'
import Employee from'./Employee'

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <h1>Employee List</h1>
          <Employee />
      </div>
    </div>
  );
}

export default App;
