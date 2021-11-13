import React, {useState} from 'react'
import Item from './Item'
import menu from './menu'
import Categories from './Categories'
import './App.css';

function App() {
  const [foot, setFoot]=useState(menu)

  const filterMenu = (category)=>{
    
    // const newItems = menu.filter((item)=>item.category === category)
    const newItems = menu.filter((item)=>{
      return item.category === category
      })
      setFoot(newItems)
  }

  return (
    <div className="App">
      <h1>Menu</h1>
      <div className="line"></div>
        <button onClick={()=>filterMenu('appetizer')}>breakfast</button>
      <div className="container">
        <Item footMenu ={foot}/>
      </div>
    </div>
  );
}

export default App;
